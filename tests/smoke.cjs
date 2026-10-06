const {setup, assert, numeric, waitFor} = require('./helpers.cjs');
const ExcelJS = require('exceljs');

const cases = {
  ecommerce: {input:{averageCheck:100,cogs:40,acquiring:0,delivery:0,fulfillment:0,tax:0,losses:0,other:0,cpa:10,orders:100,lifetimeOrders:1,fixedCosts:100}, expected:50, first:'averageCheck', exported:100},
  saas: {input:{arpu:100,discounts:0,paymentFee:0,serviceCost:20,marketing:1000,newCustomers:10,churn:10}, expected:8, first:'arpu', exported:100},
  marketplace: {input:{price:100,cogs:40,commission:0,acquiring:0,tax:0,buyout:100,forwardLogistics:5,returnLogistics:0,fulfillment:0,storage:0,other:0,adShare:10}, expected:45, first:'price', exported:100},
  services: {input:{projectRevenue:1000,laborHours:10,hourlyCost:20,contractors:100,paymentFee:0,tax:0,other:0,leads:10,conversion:20,marketing:100,capacity:5}, expected:650, first:'projectRevenue', exported:1000}
};

(async () => {
  for (const [model, test] of Object.entries(cases)) {
    const t = setup(model + '/index.html');
    for (const [key,value] of Object.entries(test.input)) t.change(key,value);
    assert.equal(numeric(t.get('primary-value').textContent),test.expected, model + ' calculation');
    const before = t.get('primary-value').textContent;
    t.change(test.first,-5);
    assert.equal(t.get(test.first).getAttribute('aria-invalid'),'true');
    assert.equal(t.get('primary-value').textContent,before,'Invalid input preserves last valid calculation');
    t.change(test.first,test.exported);
    t.get('download-button').click();
    await waitFor(() => t.downloads.length > 0 && !t.get('download-button').disabled);
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(await t.bytes(t.downloads[0]));
    assert.equal(workbook.worksheets.length,6);
    for(const name of ['Инструкция','Вводные','Юнит-экономика','Сценарии','Помесячный прогноз','Справка'])assert.ok(workbook.getWorksheet(name));
    assert.equal(workbook.getWorksheet('Вводные').getCell('B6').value,test.exported);
    let formulas = 0;
    workbook.worksheets.forEach(sheet=>sheet.eachRow(row=>row.eachCell(cell=>{if(cell.value && cell.value.formula)formulas++;})));
    assert.ok(formulas>20,'Excel must retain editable calculation formulas');
    t.get('reset-button').click();
    assert.notEqual(Number(t.get(test.first).value),test.exported);
    t.finish();
    console.log('PASS',model,': calculation, invalid input, Excel values and formulas, reset');
  }
})().catch(err=>{console.error(err);process.exitCode=1;});

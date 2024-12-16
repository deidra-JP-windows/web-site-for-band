const fs = require('fs');

// JSONファイルからデータを読み込む関数
function loadCostData(filePath) {
  try {
    const rawData = fs.readFileSync(filePath);
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error reading or parsing JSON file:', error);
    return null;
  }
}

// コストの推移を計算し、解析する関数
function analyzeCostTrends(data) {
  console.log('Cost Trends Analysis:');
  data.forEach((monthData, index) => {
    console.log(`Month: ${monthData.month}`);
    console.log(`Total Cost: ${monthData.total.amount} ${monthData.total.currency}`);
    if (index > 0) {
      const previousMonthData = data[index - 1];
      const costDifference = monthData.total.amount - previousMonthData.total.amount;
      const trend = costDifference > 0 ? 'Increase' : 'Decrease';
      console.log(`Cost Difference from Previous Month: ${costDifference} ${monthData.total.currency} (${trend})`);
    }
    console.log('---');
  });
}
  
// JSONファイルからデータを読み込む
const costData10 = loadCostData('cost_2024_10.json');
const costData11 = loadCostData('cost_2024_11.json');
const costData12 = loadCostData('cost_2024_12.json');
// 3か月分のデータを1つの配列にまとめる
const costData = [costData10, costData11, costData12].filter(data => data !== null);
// コストの推移を解析する
analyzeCostTrends(costData);
module.exports = { analyzeCostTrends };

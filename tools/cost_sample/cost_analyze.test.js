const { analyzeCostTrends } = require('./cost_analyze');

describe('analyzeCostTrends', () => {
  const consoleLogMock = jest.spyOn(console, 'log').mockImplementation(() => {});

  afterEach(() => {
    consoleLogMock.mockClear();
  });

  afterAll(() => {
    consoleLogMock.mockRestore();
  });

  it('should analyze cost trends correctly', () => {
    const sampleData = [
      {
        "month": "2024-10",
        "total": { "amount": 147000, "currency": "JPY" }
      },
      {
        "month": "2024-11",
        "total": { "amount": 147000, "currency": "JPY" }
      },
      {
        "month": "2024-12",
        "total": { "amount": 152000, "currency": "JPY" }
      }
    ];

    analyzeCostTrends(sampleData);

    expect(consoleLogMock).toHaveBeenCalledWith('Cost Trends Analysis:');
    expect(consoleLogMock).toHaveBeenCalledWith('Month: 2024-10');
    expect(consoleLogMock).toHaveBeenCalledWith('Total Cost: 147000 JPY');
    expect(consoleLogMock).toHaveBeenCalledWith('---');
    expect(consoleLogMock).toHaveBeenCalledWith('Month: 2024-11');
    expect(consoleLogMock).toHaveBeenCalledWith('Total Cost: 147000 JPY');
    expect(consoleLogMock).toHaveBeenCalledWith('Cost Difference from Previous Month: 0 JPY (Decrease)');
    expect(consoleLogMock).toHaveBeenCalledWith('---');
    expect(consoleLogMock).toHaveBeenCalledWith('Month: 2024-12');
    expect(consoleLogMock).toHaveBeenCalledWith('Total Cost: 152000 JPY');
    expect(consoleLogMock).toHaveBeenCalledWith('Cost Difference from Previous Month: 5000 JPY (Increase)');
    expect(consoleLogMock).toHaveBeenCalledWith('---');
  });
});

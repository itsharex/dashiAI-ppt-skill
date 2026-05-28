import React from 'react';

export function ChartSwitch({ title, rows, className = '', options }) {
  const items = options || buildChartOptions(title, rows);
  const current = items[0];

  return (
    <div
      className={`chart-switch ${className}`.trim()}
      data-chart-switch="true"
      data-chart-current={current.key}
      data-chart-options={JSON.stringify(items)}
    >
      <ChartOption option={current} />
    </div>
  );
}

function ChartOption({ option }) {
  const rows = normalizeChartRows(option.rows);

  return (
    <>
      <div className="chart-title">{option.title}</div>
      {option.type === 'line' ? <LineChart rows={rows} /> : null}
      {option.type === 'cards' ? <MetricCards rows={rows} /> : null}
      {option.type === 'bars' ? <BarChart rows={rows} /> : null}
    </>
  );
}

function BarChart({ rows }) {
  const max = rows.every(row => row.value <= 100) ? 100 : Math.max(1, ...rows.map(row => row.value));
  return (
    <div className="chart-bars">
      {rows.map(row => (
        <div className={`chart-row ${row.tone || ''}`.trim()} key={row.label}>
          <div className="chart-label">{row.label}</div>
          <div className="chart-track"><span style={{ width: `${(row.value / max) * 100}%` }} /></div>
          <div className="chart-value">{row.display || `${row.value}%`}</div>
        </div>
      ))}
    </div>
  );
}

function LineChart({ rows }) {
  const max = Math.max(100, ...rows.map(row => row.value));
  const points = rows.map((row, index) => {
    const x = rows.length > 1 ? (index / (rows.length - 1)) * 100 : 50;
    const y = 92 - (row.value / max) * 78;
    return { x, y, row };
  });

  return (
    <div className="chart-line">
      <svg viewBox="0 0 100 100" aria-hidden="true">
        <polyline points={points.map(point => `${point.x},${point.y}`).join(' ')} />
        {points.map(point => (
          <circle
            key={point.row.label}
            cx={point.x}
            cy={point.y}
            r={point.row.tone === 'focus' ? 3.2 : 2.3}
          />
        ))}
      </svg>
      {points.map(point => (
        <div className="chart-tick" style={{ left: `${point.x}%` }} key={point.row.label}>{point.row.label}</div>
      ))}
    </div>
  );
}

function MetricCards({ rows }) {
  return (
    <div className="chart-cards">
      {rows.map(row => (
        <div className={`chart-card ${row.tone || ''}`.trim()} key={row.label}>
          <div className="chart-card-value">{row.display || `${row.value}%`}</div>
          <div className="chart-card-label">{row.label}</div>
        </div>
      ))}
    </div>
  );
}

function buildChartOptions(title, rows) {
  const normalized = normalizeChartRows(rows);
  return [
    { key: 'bars', label: '横向条形', type: 'bars', title, rows: normalized },
    { key: 'line', label: '趋势折线', type: 'line', title: '趋势变化', rows: normalized },
    { key: 'cards', label: '指标卡片', type: 'cards', title: '指标快照', rows: normalized },
  ];
}

function normalizeChartRows(rows = []) {
  return rows.map(row => Array.isArray(row)
    ? { label: row[0], value: Number(row[1]) || 0, tone: row[2], display: row[3] }
    : { label: row.label, value: Number(row.value) || 0, tone: row.tone, display: row.display });
}

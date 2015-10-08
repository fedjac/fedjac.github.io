new Chartist.Line('.ct-chart', {
  labels: ['Australia', 'USA', 'Sweden', 'New York', 'London', 'Canada', 'UK'],
  series: [
    [40000, 45000, 42000, 57000, 34000, 32000, 31000],
  ]
}, {
  low: 0,
  showArea: true
});

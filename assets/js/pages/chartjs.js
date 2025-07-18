function hexToRGB(a, r) {
  var t = parseInt(a.slice(1, 3), 16),
    e = parseInt(a.slice(3, 5), 16),
    o = parseInt(a.slice(5, 7), 16)
  return r
    ? 'rgba(' + t + ', ' + e + ', ' + o + ', ' + r + ')'
    : 'rgb(' + t + ', ' + e + ', ' + o + ')'
}
!(function (d) {
  'use strict'
  function a() {
    ;(this.$body = d('body')), (this.charts = [])
  }
  ;(a.prototype.respChart = function (r, t, e, o) {
    var n = Chart.controllers.line.prototype.draw
    Chart.controllers.line.prototype.draw = function () {
      n.apply(this, arguments)
      var a = this.chart.chart.ctx,
        r = a.stroke
      a.stroke = function () {
        a.save(),
          (a.shadowColor = 'rgba(0,0,0,0.01)'),
          (a.shadowBlur = 20),
          (a.shadowOffsetX = 0),
          (a.shadowOffsetY = 5),
          r.apply(this, arguments),
          a.restore()
      }
    }
    var s = Chart.controllers.doughnut.prototype.draw
    Chart.controllers.doughnut = Chart.controllers.doughnut.extend({
      draw: function () {
        s.apply(this, arguments)
        var a = this.chart.chart.ctx,
          r = a.fill
        a.fill = function () {
          a.save(),
            (a.shadowColor = 'rgba(0,0,0,0.03)'),
            (a.shadowBlur = 4),
            (a.shadowOffsetX = 0),
            (a.shadowOffsetY = 3),
            r.apply(this, arguments),
            a.restore()
        }
      },
    })
    var l = Chart.controllers.bar.prototype.draw
    ;(Chart.controllers.bar = Chart.controllers.bar.extend({
      draw: function () {
        l.apply(this, arguments)
        var a = this.chart.chart.ctx,
          r = a.fill
        a.fill = function () {
          a.save(),
            (a.shadowColor = 'rgba(0,0,0,0.01)'),
            (a.shadowBlur = 20),
            (a.shadowOffsetX = 4),
            (a.shadowOffsetY = 5),
            r.apply(this, arguments),
            a.restore()
        }
      },
    })),
      (Chart.defaults.global.defaultFontColor = '#8391a2'),
      (Chart.defaults.scale.gridLines.color = '#8391a2')
    var i = r.get(0).getContext('2d'),
      c = d(r).parent()
    return (function () {
      var a
      switch ((r.attr('width', d(c).width()), t)) {
        case 'Line':
          a = new Chart(i, { type: 'line', data: e, options: o })
          break
        case 'Doughnut':
          a = new Chart(i, { type: 'doughnut', data: e, options: o })
          break
        case 'Pie':
          a = new Chart(i, { type: 'pie', data: e, options: o })
          break
        case 'Bar':
          a = new Chart(i, { type: 'bar', data: e, options: o })
          break
        case 'Radar':
          a = new Chart(i, { type: 'radar', data: e, options: o })
          break
        case 'PolarArea':
          a = new Chart(i, { data: e, type: 'polarArea', options: o })
      }
      return a
    })()
  }),
    (a.prototype.initCharts = function () {
      var a,
        r,
        t,
        e,
        o,
        n,
        s,
        l = [],
        i = ['#727cf5', '#0acf97', '#fa5c7c', '#ffbc00']
      return (
        0 < d('#line-chart-example').length &&
          ((a = {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                label: 'Current Week',
                backgroundColor: hexToRGB(
                  (n = (o = d('#line-chart-example').data('colors'))
                    ? o.split(',')
                    : i.concat())[0],
                  0.3,
                ),
                borderColor: n[0],
                data: [32, 42, 42, 62, 52, 75, 62],
              },
              {
                label: 'Previous Week',
                fill: !0,
                backgroundColor: 'transparent',
                borderColor: n[1],
                borderDash: [5, 5],
                data: [42, 58, 66, 93, 82, 105, 92],
              },
            ],
          }),
          l.push(
            this.respChart(d('#line-chart-example'), 'Line', a, {
              maintainAspectRatio: !1,
              legend: { display: !1 },
              tooltips: { intersect: !1 },
              hover: { intersect: !0 },
              plugins: { filler: { propagate: !1 } },
              scales: {
                xAxes: [
                  { reverse: !0, gridLines: { color: 'rgba(0,0,0,0.05)' } },
                ],
                yAxes: [
                  {
                    ticks: { stepSize: 20 },
                    display: !0,
                    borderDash: [5, 5],
                    gridLines: { color: 'rgba(0,0,0,0)', fontColor: '#fff' },
                  },
                ],
              },
            }),
          )),
        0 < d('#bar-chart-komputer').length &&
          ((n = (o = d('#bar-chart-komputer').data('colors'))
            ? o.split(',')
            : i.concat()),
          (r = document
            .getElementById('bar-chart-komputer')
            .getContext('2d')
            .createLinearGradient(0, 500, 0, 150)).addColorStop(0, n[0]),
          r.addColorStop(1, n[1]),
          (t = {
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: 'Sales Analytics',
                backgroundColor: r,
                borderColor: r,
                hoverBackgroundColor: r,
                hoverBorderColor: r,
                data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
              },
              {
                label: 'Dollar Rate',
                backgroundColor: '#e3eaef',
                borderColor: '#e3eaef',
                hoverBackgroundColor: '#e3eaef',
                hoverBorderColor: '#e3eaef',
                data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
              },
            ],
          }),
          l.push(
            this.respChart(d('#bar-chart-komputer'), 'Bar', t, {
              maintainAspectRatio: !1,
              legend: { display: !1 },
              scales: {
                yAxes: [
                  {
                    gridLines: { display: !1, color: 'rgba(0,0,0,0.05)' },
                    stacked: !1,
                    ticks: { stepSize: 20 },
                  },
                ],
                xAxes: [
                  {
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    stacked: !1,
                    gridLines: { color: 'rgba(0,0,0,0.01)' },
                  },
                ],
              },
            }),
          )),
          0 < d('#bar-chart-monitor').length &&
          ((n = (o = d('#bar-chart-monitor').data('colors'))
            ? o.split(',')
            : i.concat()),
          (r = document
            .getElementById('bar-chart-monitor')
            .getContext('2d')
            .createLinearGradient(0, 500, 0, 150)).addColorStop(0, n[0]),
          r.addColorStop(1, n[1]),
          (t = {
            labels: [
              'Jan',
              'Feb',
              'Mar',
              'Apr',
              'May',
              'Jun',
              'Jul',
              'Aug',
              'Sep',
              'Oct',
              'Nov',
              'Dec',
            ],
            datasets: [
              {
                label: 'Sales Analytics',
                backgroundColor: '#DC143C',
                borderColor: r,
                hoverBackgroundColor: r,
                hoverBorderColor: r,
                data: [65, 59, 80, 81, 56, 89, 40, 32, 65, 59, 80, 81],
              },
              {
                label: 'Dollar Rate',
                backgroundColor: '#FFA500',
                borderColor: '#e3eaef',
                hoverBackgroundColor: '#e3eaef',
                hoverBorderColor: '#e3eaef',
                data: [89, 40, 32, 65, 59, 80, 81, 56, 89, 40, 65, 59],
              },
            ],
          }),
          l.push(
            this.respChart(d('#bar-chart-monitor'), 'Bar', t, {
              maintainAspectRatio: !1,
              legend: { display: !1 },
              scales: {
                yAxes: [
                  {
                    gridLines: { display: !1, color: 'rgba(0,0,0,0.05)' },
                    stacked: !1,
                    ticks: { stepSize: 20 },
                  },
                ],
                xAxes: [
                  {
                    barPercentage: 0.7,
                    categoryPercentage: 0.5,
                    stacked: !1,
                    gridLines: { color: 'rgba(0,0,0,0.01)' },
                  },
                ],
              },
            }),
          )),
        0 < d('#donut-chart-example').length &&
          ((e = {
            labels: ['Direct', 'Affilliate', 'Sponsored', 'E-mail'],
            datasets: [
              {
                data: [300, 135, 48, 154],
                backgroundColor: (n = (o = d('#donut-chart-example').data(
                  'colors',
                ))
                  ? o.split(',')
                  : i.concat()),
                borderColor: 'transparent',
                borderWidth: '3',
              },
            ],
          }),
          l.push(
            this.respChart(d('#donut-chart-example'), 'Doughnut', e, {
              maintainAspectRatio: !1,
              cutoutPercentage: 60,
              legend: { display: !1 },
            }),
          )),
        0 < d('#radar-chart-example').length &&
          ((s = {
            labels: [
              'Eating',
              'Drinking',
              'Sleeping',
              'Designing',
              'Coding',
              'Cycling',
              'Running',
            ],
            datasets: [
              {
                label: 'Desktops',
                backgroundColor: hexToRGB(
                  (n = (o = d('#radar-chart-example').data('colors'))
                    ? o.split(',')
                    : i.concat())[0],
                  0.2,
                ),
                borderColor: n[0],
                pointBackgroundColor: n[0],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: n[0],
                data: [65, 59, 90, 81, 56, 55, 40],
              },
              {
                label: 'Tablets',
                backgroundColor: hexToRGB(n[1], 0.2),
                borderColor: n[1],
                pointBackgroundColor: n[1],
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: n[1],
                data: [28, 48, 40, 19, 96, 27, 100],
              },
            ],
          }),
          l.push(
            this.respChart(d('#radar-chart-example'), 'Radar', s, {
              maintainAspectRatio: !1,
            }),
          )),
        l
      )
    }),
    (a.prototype.init = function () {
      var r = this
      ;(Chart.defaults.global.defaultFontFamily =
        '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'),
        (r.charts = this.initCharts()),
        d(window).on('resize', function (a) {
          d.each(r.charts, function (a, r) {
            try {
              r.destroy()
            } catch (a) {}
          }),
            (r.charts = r.initCharts())
        })
    }),
    (d.ChartJs = new a()),
    (d.ChartJs.Constructor = a)
})(window.jQuery),
  (function () {
    'use strict'
    window.jQuery.ChartJs.init()
  })()

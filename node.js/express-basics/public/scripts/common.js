$.ajax({
  url: '/api/list',
  method: 'get',
  success: function(res) {
    const templateStr = `
    <ul>
      {{each data}}
        <li>{{$value}}</li>
      {{/each}}
    </ul>
    `
    const html = template.render(templateStr, {
      data: res.data
    })
    $('#list').html(html)
  }
})
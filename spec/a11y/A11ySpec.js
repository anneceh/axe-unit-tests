describe ('Testing UI with axe', function() {
  'use strict';

  beforeAll(function() {
      var body = document.getElementsByTagName("body")[0];
      var div = WebPage.div("div1", "redBg");
      body.appendChild(div);
      div.appendChild(WebPage.input("search", true));
      div.appendChild(WebPage.image("logo", "images/example.jpg"));
    });

  it('should not have accessibility errors in element', function (done) {
      var n = document.getElementById('div1');
      var results = 0;
      axe.run(n, {}, function (error, result) {
          if (result.violations.length > 0) {
            results = JSON.stringify(result.violations, ['id', 'impact', 'tags', 'description', 'help', 'helpUrl'], 4);
          }
          expect(results).toEqual(0);
          done();
      });
  });
});

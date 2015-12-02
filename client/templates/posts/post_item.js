Template.postItem.helpers({
  host: function() {
    return Session.get('host') === 'sandbox' ? 
    'http://cp01-testing-iknow-real04.cp01.baidu.com:8080'
 : Session.get('host') === 'preview' ?    
'http://test.iknow.jx-orp.int.baidu.com'
 : 'http://zhidao.baidu.com';
  },
  samples: function(){
    var host = Session.get('host') === 'sandbox' ? 
    'http://cp01-testing-iknow-real04.cp01.baidu.com:8080'
 : Session.get('host') === 'preview' ?    
'http://test.iknow.jx-orp.int.baidu.com'
 : 'http://zhidao.baidu.com';
    var ids = [725,735,745,755,765];
    var ret = [];
    var url = this.url;
    _.each(ids,function(id) {
       ret.push({
          id: id,
          host: host,
          url: url
       });
    });
    return ret;
  }
});

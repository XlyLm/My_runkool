/**
 * 一、获取的信息是数组类型，在相应页面的js中的data中定一个获取数据的数组
 * 二、在js的onLoad中发送请求,在page()外面定义一个服务器ip地址变量<const httpUrl = "http://127.0.0.1">
 * 三、写请求：
 * 1.官网API的请求接口<wx.request({
 *  url:httpUrl+'swagger中的Path接口地址', //地址拼接
 *  data:{
 *    传的参数:值  
 *  },
 *  header:{},
 *  success(res){
 *    //res后端返回的数据对象<ResponseData类型>
 *    //根据res.code判断是否请求成功
 *    //res.data为请求成功返回的数据<数组类型>
 *  }
 * })>,
 * 四.因为Imge资源放在了后台，所以需定义一个image的Url获取图片地址<imageUrl:'http://127.0.0.1/img/'>,然后将从后台拿到的图片地址和自己定义的imageUrl进行拼接<imageUrl+item.imageurl>
 * 
 * #######@获取不同信息则另外发送请求<重复三、四>
 * 
 * 五、关联数据表，首先是在entity的相应对象中加入属性<关联的表的实体类型>,然后是去修改sql的查询语句，<增加关联的表和从关联表中查询的字段，为字段取别名(user.id userid)>,然后是修改映射resultMap(注意column中别名)增加查询增加的字段<result property="字段名" column="字段名/别名"></result>【property为实体类的属性，column为sql的字段名或别名】
 * 六、分页渲染数据：将拿到的数据和之前前的数据进行拼接，页面不能一直新增<在页面定义一个标识>，
 * 七、跳转页面，并传递参数，发送请求，后台将需要的图片信息查询出来。
 * 八、小程序授权：采用官方API(wx.getUserProfile)成功的回调获取用户信息<userInfo>，然后将得到的数据保存起来，(wx.setStorage()本地缓存后，可在任何一个页面拿到该数据<key:'userInfo',data:res.userInfo>),成功授权后跳转页面<每次登录都要授权，可设置授权时间>，<wx.getStorage在别的页面拿取本地缓存的用户信息>将得到的数据渲染到页面
 * 九、注册页面、判断用户是否存在。对密码加密<引入依赖——————加密（MD5Hash md5Hash=new MD5Hash(password[加密的对象],xie[盐值],10[加密次数]),将加密的密码保存到user表user.setPassword(md5Hash.toString()),---将加密的过程try一下>
 * 十、用户登录，（wx.login<登录凭证code，openid和密钥>）将code传给后台，后台返回appid和密钥。登录流程：1、登录页面（手机号、密码）,2、点击登录时，获取手机号和密码，3、发起请求wx.login获得code，4、后台接收登录请求：接受参数code、手机号、密码，后台模拟一个GET请求，请求微信的后台接口（参数：appid和密钥、code），拿到返回值用户的openid和密钥，转化为json数据，根据拿到的appid和密钥生成token，修改user表的数据openid和密钥，5、需要把token返回小程序，6、小程序吧toten翻入本地缓存，7、下次发起请求需携带token，后台接收token获取openid。
 * 十一、获取code并向后端传入参数，后端（controller）接口获取参数<返回一个service.userLogin（...）>，（service）定义一个登录接口，（serviceImpl）对接口实现（1、非空校验，）
 * 十二、校验手机号和密码是否匹配，做密码加密（和注册加密一致）,写sql查询语句
 * 十三、发请求模拟http（加依赖，写一个工具类java模拟get请求）
 * */
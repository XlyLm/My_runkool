package www.xie.utils;

//定义返回类型
public enum ResponseCode {
    SUCCESS("0","请求成功"),
    FAIL("404","网络异常..."),
    ERROR_1("405","手机号已经注册"),
    ERROR_2("406","账号密码不匹配"),
    ERROR_3("407","用户不存在");

    private String code;
    private String msg;

    public String getCode() {
        return code;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public String getMsg() {
        return msg;
    }

    public void setMsg(String msg) {
        this.msg = msg;
    }

    ResponseCode(String code, String msg) {
        this.code = code;
        this.msg = msg;
    }

    ResponseCode() {
    }
}

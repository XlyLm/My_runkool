package www.xie.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import www.xie.entity.User;
import www.xie.service.UserService;
import org.springframework.web.bind.annotation.*;
import www.xie.utils.ResponseData;

import javax.annotation.Resource;
import java.util.List;

/**
 * (User)表控制层
 *
 * @author makejava
 * @since 2021-08-17 15:19:41
 */
@RestController
@RequestMapping("user")
public class UserController {
    /**
     * 服务对象
     */
    @Resource
    private UserService userService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @ApiOperation(value = "获取user信息",notes = "根据id获取信息")
    @GetMapping("selectOne")
    public User selectOne(Long id) {
        return this.userService.queryById(id);
    }

    @ApiOperation(value = "注册用户接口",notes = "根据传的数据创建用户")
    @PostMapping("regUser")
    public ResponseData regUser(User user){
        return userService.insert(user);
    }

    @ApiOperation(value = "登录用户接口",notes = "根据传的数据登录用户")
    @PostMapping("userLogin")
    public ResponseData userLogin(String code,String password,String phone){
        return userService.userLogin(code,password ,phone );
    }

    @ApiOperation(value = "查询用户接口",notes = "根据用户的phone查询用户")
    @PostMapping("queryUserByPhone")
    public ResponseData queryUserByPhone(String phone){
        return userService.queryUserByPhone(phone);
    }

    @ApiOperation(value = "酷跑星榜接口",notes = "后端将user表的信息根据grade的大小降序排列，然后将前30条数据返回")
    @PostMapping("getLis")
    public List<User> getList(){
        return userService.getList();
    }

    @ApiOperation(value = "传入用户修改后的信息 更新消息",notes = "根传入用户修改后的信息 更新消息")
    @PostMapping("UpdateUserByUser")
    public User UpdateUserByUser(User user){
        return userService.UpdateUserByUser(user);
    }
}
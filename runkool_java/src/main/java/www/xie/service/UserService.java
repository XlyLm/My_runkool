package www.xie.service;

import www.xie.entity.User;
import www.xie.utils.ResponseData;

import java.util.List;

/**
 * (User)表服务接口
 *
 * @author makejava
 * @since 2021-08-17 15:19:40
 */
public interface UserService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    User queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<User> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    ResponseData insert(User user);

    /**
     * 修改数据
     *
     * @param user 实例对象
     * @return 实例对象
     */
    User update(User user);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

    /**
     *
     * @param code
     * @param phone
     * @param password
     * @return
     */
    ResponseData userLogin(String code, String phone, String password);

    /**
     * 通过phone查询单条数据
     *
     * @param phone
     * @return 实例对象
     */
    ResponseData queryUserByPhone(String phone);

    /**
     * 获取榜单
     * @return
     */
    List<User> getList();

    /**
     * 传入用户修改后的信息 更新消息
     * @param user
     * @return
     */
    User UpdateUserByUser(User user);
}
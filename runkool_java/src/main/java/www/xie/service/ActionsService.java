package www.xie.service;

import www.xie.entity.Actions;
import www.xie.entity.Addact;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Actions)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:52
 */
public interface ActionsService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Actions queryById(Long id);

    /**
     * 查询多条数据
     *
     *
     * @return 对象列表
     */
    List<Actions> queryAllByLimit(LimitQuery limitQuery);

    /**
     * 新增数据
     *
     * @param actions 实例对象
     * @return 实例对象
     */
    Actions insert(Actions actions);

    /**
     * 修改数据
     *
     * @param actions 实例对象
     * @return 实例对象
     */
    Actions update(Actions actions);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

    /**
     * 查询所有活动
     * @return
     */
    List<Actions> queryAllActions();

    String creAction(Actions action);
}

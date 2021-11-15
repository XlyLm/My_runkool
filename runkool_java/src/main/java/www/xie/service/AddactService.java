package www.xie.service;

import www.xie.entity.Actions;
import www.xie.entity.Addact;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Addact)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public interface AddactService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Addact queryById(Long id);

    /**
     * 查询多条数据
     *
     * @return 对象列表
     */
    List<Addact> queryAllByLimit(LimitQuery limitQuery);

    /**
     * 新增数据
     *
     * @param addact 实例对象
     * @return 实例对象
     */
    Addact insert(Addact addact);

    /**
     * 修改数据
     *
     * @param addact 实例对象
     * @return 实例对象
     */
    Addact update(Addact addact);

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
    List<Addact> queryAllAddact();

    /**
     * 搜索活动
     * @param
     * @param userid
     * @return
     */
    List<Addact> searchActions(String value, Long userid,LimitQuery limitQuery);

    /**
     * 创建活动
     * @param addact
     */
    String creAction(Addact addact);
}

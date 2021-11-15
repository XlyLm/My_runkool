package www.xie.service;

import www.xie.entity.Surrblog;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Surrblog)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
public interface SurrblogService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Surrblog queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Surrblog> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param surrblog 实例对象
     * @return 实例对象
     */
    Surrblog insert(Surrblog surrblog);

    /**
     * 修改数据
     *
     * @param surrblog 实例对象
     * @return 实例对象
     */
    Surrblog update(Surrblog surrblog);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    void deleteById(Long userid,Long id);

    /**
     * 通过userid查找部落
     * @param userid
     * @return
     */
    List<Surrblog> queryBlogByUserId(Long userid);

    /**
     * 根据用户id
     * @param limitQuery
     * @return
     */
    List<Surrblog> querySurrblogInfoByUId(LimitQuery limitQuery);

    List<Surrblog> queryProInfo(LimitQuery limitQuery);
}

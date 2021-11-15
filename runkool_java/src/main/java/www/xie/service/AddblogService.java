package www.xie.service;

import www.xie.entity.Addblog;
import www.xie.entity.Surrblog;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Addblog)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public interface AddblogService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Addblog queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Addblog> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param addblog 实例对象
     * @return 实例对象
     */
    Addblog insert(Addblog addblog);

    /**
     * 修改数据
     *
     * @param addblog 实例对象
     * @return 实例对象
     */
    Addblog update(Addblog addblog);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    void deleteById(Long userid,Long id);

    /**
     *
     * @param limitQuery
     * @return
     */
    List<Addblog> queryProInfo(LimitQuery limitQuery);

}

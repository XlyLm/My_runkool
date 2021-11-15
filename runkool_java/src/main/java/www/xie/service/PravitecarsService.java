package www.xie.service;

import www.xie.entity.Pravitecars;
import www.xie.query.LimitQuery;

import java.util.List;

/**
 * (Pravitecars)表服务接口
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public interface PravitecarsService {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Pravitecars queryById(Long id);

    /**
     * 查询多条数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Pravitecars> queryAllByLimit(int offset, int limit);

    /**
     * 新增数据
     *
     * @param pravitecars 实例对象
     * @return 实例对象
     */
    Pravitecars insert(Pravitecars pravitecars);

    /**
     * 修改数据
     *
     * @param pravitecars 实例对象
     * @return 实例对象
     */
    Pravitecars update(Pravitecars pravitecars);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 是否成功
     */
    boolean deleteById(Long id);

    /**
     * 通过userid，页数条数查询
     * @param userid
     * @param limitQuery
     * @return
     */
    List<Pravitecars> queryPersonPunchCard(Long userid, LimitQuery limitQuery);

    /**
     * 个人打卡搜索
     * @param value
     * @param userid
     * @param limitQuery
     * @return
     */
    List<Pravitecars> searchPersonPunchCard(String value, Long userid,LimitQuery limitQuery);

    /**
     * 删除个人活动
     * @param id
     * @param userid
     */
    void deletePravitecard(Long id,Long userid);
}

package www.xie.dao;

import www.xie.entity.Actions;
import www.xie.entity.Addact;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Addact)表数据库访问层
 *
 * @author makejava
 * @since 2021-08-18 12:37:55
 */
public interface AddactDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Addact queryById(Long id);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Addact> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 通过id分页查询
     * @param offset
     * @param limit
     * @param id
     * @return
     */
    List<Addact> queryAllByLimitId(@Param("offset") int offset, @Param("limit") int limit, @Param("id") Long id);

    /**
     * 通过实体作为筛选条件查询
     *
     * @param addact 实例对象
     * @return 对象列表
     */
    Addact queryAll(Addact addact);

    /**
     * 新增数据
     *
     * @param addact 实例对象
     * @return 影响行数
     */
    int insert(Addact addact);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Addact> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Addact> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Addact> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Addact> entities);

    /**
     * 修改数据
     *
     * @param addact 实例对象
     * @return 影响行数
     */
    int update(Addact addact);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Long id);

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
    List<Addact> searchActions(@Param("string")String value, @Param("id") Long userid,@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 根据userid和name查询活动
     * @param userid
     * @param name
     * @return
     */
    Addact queryActByUN(@Param("userid")Long userid,@Param("name")String name,@Param("time")String time,@Param("address")String address);
}
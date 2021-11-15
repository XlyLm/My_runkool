package www.xie.dao;

import www.xie.entity.Actions;
import org.apache.ibatis.annotations.Param;
import www.xie.entity.Addact;

import java.util.List;

/**
 * (Actions)表数据库访问层
 *
 * @author makejava
 * @since 2021-08-18 12:37:52
 */
public interface ActionsDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Actions queryById(Long id);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Actions> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 通过实体作为筛选条件查询
     *
     * @param actions 实例对象
     * @return 对象列表
     */
    List<Actions> queryAll(Actions actions);

    /**
     * 新增数据
     *
     * @param actions 实例对象
     * @return 影响行数
     */
    int insert(Actions actions);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Actions> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Actions> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Actions> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Actions> entities);

    /**
     * 修改数据
     *
     * @param actions 实例对象
     * @return 影响行数
     */
    int update(Actions actions);

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
    List<Actions> queryAllActions();

    /**
     * 根据userid和name查询活动
     * @param userid
     * @param name
     * @return
     */
    Actions queryActByUN(@Param("userid")Long userid, @Param("name")String name, @Param("time")String time, @Param("address")String address);

}
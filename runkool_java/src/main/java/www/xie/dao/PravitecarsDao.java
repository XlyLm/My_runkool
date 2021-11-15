package www.xie.dao;

import www.xie.entity.Pravitecars;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * (Pravitecars)表数据库访问层
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public interface PravitecarsDao {

    /**
     * 通过ID查询单条数据
     *
     * @param id 主键
     * @return 实例对象
     */
    Pravitecars queryById(Long id);

    /**
     * 查询指定行数据
     *
     * @param offset 查询起始位置
     * @param limit  查询条数
     * @return 对象列表
     */
    List<Pravitecars> queryAllByLimit(@Param("offset") int offset, @Param("limit") int limit);


    /**
     * 通过实体作为筛选条件查询
     *
     * @param pravitecars 实例对象
     * @return 对象列表
     */
    List<Pravitecars> queryAll(Pravitecars pravitecars);

    /**
     * 新增数据
     *
     * @param pravitecars 实例对象
     * @return 影响行数
     */
    int insert(Pravitecars pravitecars);

    /**
     * 批量新增数据（MyBatis原生foreach方法）
     *
     * @param entities List<Pravitecars> 实例对象列表
     * @return 影响行数
     */
    int insertBatch(@Param("entities") List<Pravitecars> entities);

    /**
     * 批量新增或按主键更新数据（MyBatis原生foreach方法）
     *
     * @param entities List<Pravitecars> 实例对象列表
     * @return 影响行数
     */
    int insertOrUpdateBatch(@Param("entities") List<Pravitecars> entities);

    /**
     * 修改数据
     *
     * @param pravitecars 实例对象
     * @return 影响行数
     */
    int update(Pravitecars pravitecars);

    /**
     * 通过主键删除数据
     *
     * @param id 主键
     * @return 影响行数
     */
    int deleteById(Long id);

    /**
     * 通过userid，页数条数查询
     * @param
     * @return
     */
    List<Pravitecars> queryPersonPunchCard(@Param("userid")Long id,@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 个人打卡搜索
     * @param value
     * @param userid
     * @return
     */
    List<Pravitecars> searchPersonPunchCard(@Param("string") String value,@Param("userid") Long userid,@Param("offset") int offset, @Param("limit") int limit);

    /**
     * 删除个人活动
     * @param id
     * @param userid
     */
    void deletePravitecard(@Param("id") Long id,@Param("userid") Long userid);

}


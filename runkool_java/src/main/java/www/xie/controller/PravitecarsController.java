package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Pravitecars;
import www.xie.query.LimitQuery;
import www.xie.service.PravitecarsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Pravitecars)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
@RestController
@RequestMapping("pravitecars")
public class PravitecarsController {
    /**
     * 服务对象
     */
    @Resource
    private PravitecarsService pravitecarsService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Pravitecars selectOne(Long id) {
        return this.pravitecarsService.queryById(id);
    }

    @ApiOperation(value = "个人打卡接口",notes = "传入userid、page、limit 分页返回结果")
    @PostMapping("queryPersonPunchCard")
    public List<Pravitecars> queryPersonPunchCard(Long userid, LimitQuery limitQuery) {
        return pravitecarsService.queryPersonPunchCard(userid,limitQuery);
    }

    @ApiOperation(value = "个人打卡搜索接口",notes = "传入字符串和user的id，后端在pravitecars表查询，将查询的数据分页返回")
    @PostMapping("searchPersonPunchCard")
    public List<Pravitecars> searchPersonPunchCard(String value, Long userid,LimitQuery limitQuery){
        return pravitecarsService.searchPersonPunchCard(value,userid,limitQuery);
    }

    @ApiOperation(value = "个人打卡加入接口",notes = "pravitecars对象")
    @PostMapping("insertPravitecars")
    public void insertPravitecars(Pravitecars pravitecars){
        this.pravitecarsService.insert(pravitecars);
    }

    @ApiOperation(value = "删除个人活动接口",notes = "传入pravitecars的id和user的id，后端查询pravitecars表，删除该条数据")
    @PostMapping("deletePravitecard")
    public void deletePravitecard(Long id,Long userid)
    {
        pravitecarsService.deletePravitecard(id,userid);
    }
}

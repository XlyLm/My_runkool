package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Actions;
import www.xie.entity.Addact;
import www.xie.query.LimitQuery;
import www.xie.service.AddactService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Addact)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
@RestController
@RequestMapping("addact")
public class AddactController {
    /**
     * 服务对象
     */
    @Resource
    private AddactService addactService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Addact selectOne(Long id) {
        return this.addactService.queryById(id);
    }

    /**
     * 更新活动
     * @return
     */
    @ApiOperation(value = "更新活动",notes = "")
    @PostMapping("queryAllActions")
    public void queryAllActions(){
        this.addactService.queryAllAddact();
    }

    @ApiOperation(value = "分页获取活动",notes = "通过id分页查询")
    @PostMapping("queryAddactByLimitId")
    public List<Addact> queryActionsByLimit(LimitQuery limitQuery){return this.addactService.queryAllByLimit(limitQuery);}

    @ApiOperation(value = "活动打卡接口",notes = "传入addact的id 和user的id，isplay的值改为true")
    @PostMapping("switchDisplay")
    public void switchDisplay(Addact addact){
        addact.setIsplay("true");
        addactService.update(addact);
    }

    @ApiOperation(value = "活动打卡搜索接口",notes = "传入字符串和userid，后端在addact表查询，将查询的数据分页返回")
    @PostMapping("searchActions")
    public List<Addact> searchActions(String value, Long userid,LimitQuery limitQuery){
        return this.addactService.searchActions(value,userid,limitQuery);
    }

    @ApiOperation(value = "添加活动",notes = "传入user的id和actions活动的信息 isplay默认值为false")
    @PostMapping("addAction")
    public String addAction(Addact addact){
        if(this.addactService.insert(addact)!=null){
            return "成功加入活动";
        }
        return null;
    }

    @ApiOperation(value = "创建活动",notes = "传入user的id和actions活动的信息")
    @PostMapping("creAction")
    public String creAction(Addact addact){
        return this.addactService.creAction(addact);
    }
}

package www.xie.controller;

import io.swagger.annotations.ApiOperation;
import www.xie.entity.Actions;
import www.xie.entity.Addact;
import www.xie.query.LimitQuery;
import www.xie.service.ActionsService;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.List;

/**
 * (Actions)表控制层
 *
 * @author makejava
 * @since 2021-08-18 12:37:52
 */
@RestController
@RequestMapping("actions")
public class ActionsController {
    /**
     * 服务对象
     */
    @Resource
    private ActionsService actionsService;

    /**
     * 通过主键查询单条数据
     *
     * @param id 主键
     * @return 单条数据
     */
    @GetMapping("selectOne")
    public Actions selectOne(Long id) {
        return this.actionsService.queryById(id);
    }

    /**
     * 更新活动
     * @return
     */
    @ApiOperation(value = "更新活动",notes = "")
    @PostMapping("queryAllActions")
    public List<Actions> queryAllActions(){
        return this.actionsService.queryAllActions();
    }

    @ApiOperation(value = "分页获取活动",notes = "根据传入")
    @PostMapping("queryActionsByLimit")
    public List<Actions> queryActionsByLimit(LimitQuery limitQuery){return this.actionsService.queryAllByLimit(limitQuery);}

    @ApiOperation(value = "创建活动",notes = "传入user的id和actions活动的信息")
    @PostMapping("creAction")
    public String creAction(Actions action){
        return this.actionsService.creAction(action);
    }
}

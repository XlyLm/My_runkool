package www.xie.entity;

import java.io.Serializable;

/**
 * (Userimgs)实体类
 *
 * @author makejava
 * @since 2021-08-18 12:37:57
 */
public class Userimgs implements Serializable {
    private static final long serialVersionUID = -80920125215901283L;

    private Long id;

    private Long userid;

    private String img;

    private String type;


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

}

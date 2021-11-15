package www.xie.entity;

import java.io.Serializable;

/**
 * (Addblog)实体类
 *
 * @author makejava
 * @since 2021-08-18 12:37:56
 */
public class Addblog implements Serializable {
    private static final long serialVersionUID = 391551919359663629L;

    private Long id;

    private Long userid;

    private String name;

    private Long grade;

    private String maxnum;

    private String personnum;

    private String isopen;

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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Long getGrade() {
        return grade;
    }

    public void setGrade(Long grade) {
        this.grade = grade;
    }

    public String getMaxnum() {
        return maxnum;
    }

    public void setMaxnum(String maxnum) {
        this.maxnum = maxnum;
    }

    public String getPersonnum() {
        return personnum;
    }

    public void setPersonnum(String personnum) {
        this.personnum = personnum;
    }

    public String getIsopen() {
        return isopen;
    }

    public void setIsopen(String isopen) {
        this.isopen = isopen;
    }
}

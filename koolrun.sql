/*
Navicat MySQL Data Transfer

Source Server         : Springboot
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : koolrun

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2021-08-26 17:16:49
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `actions`
-- ----------------------------
DROP TABLE IF EXISTS `actions`;
CREATE TABLE `actions` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `isover` varchar(45) DEFAULT NULL,
  `e` bigint(20) DEFAULT NULL,
  `w` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of actions
-- ----------------------------
INSERT INTO `actions` VALUES ('7', '6', '谭人升', '2021/8/23  11:59:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升1.jpg', '团队', 'false', '31', '108');
INSERT INTO `actions` VALUES ('8', '6', '谭人升', '2021/8/23 12:00:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升2.jpg', '团队', 'false', '31', '108');
INSERT INTO `actions` VALUES ('9', '6', '谭人升', '2021/8/23 13:50:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升3.jpg', '团队', 'false', '31', '108');
INSERT INTO `actions` VALUES ('10', '8', '张涛', '2021/8/20 17:02:30', '成都', 'http://121.41.109.167/runkool/img/张涛.jpeg', '团队', 'true', '44', '86');
INSERT INTO `actions` VALUES ('11', '9', '张财源', '2021/8/21 17:04', '西南石油大学南门', 'http://121.41.109.167/runkool/img/张财源1.jpeg', '团队', 'false', '30', '104');
INSERT INTO `actions` VALUES ('12', '9', '张财源', '2021/8/21 17:05', '西南石油大学', 'http://121.41.109.167/runkool/img/张财源2.jpg', '团队', 'false', '30', '104');
INSERT INTO `actions` VALUES ('13', '5', '六喜部落', '2021/09/25 12:30:20', '西南石油', 'http://121.41.109.167/runkool/img/谢良勇1.jpeg', '团队', 'false', '28', '104');
INSERT INTO `actions` VALUES ('14', '5', '谢良勇', '2021/09/30 13:30:59', '家里', 'http://121.41.109.167/runkool/img/谢良勇2.jpeg', '个人', 'false', '28', '104');
INSERT INTO `actions` VALUES ('15', '5', '谢良勇', '2021/10/03 12:30:00', '北京', 'http://121.41.109.167/runkool/img/谢良勇3.jpeg', '团队', 'false', '28', '104');

-- ----------------------------
-- Table structure for `addact`
-- ----------------------------
DROP TABLE IF EXISTS `addact`;
CREATE TABLE `addact` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  `isover` varchar(45) DEFAULT NULL,
  `isplay` varchar(45) DEFAULT NULL,
  `e` bigint(20) DEFAULT NULL,
  `w` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addact
-- ----------------------------
INSERT INTO `addact` VALUES ('31', '6', '谭人升', '2021/8/23  11:59:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升1.jpg', '团队', 'false', 'false', '31', '108');
INSERT INTO `addact` VALUES ('32', '6', '谭人升', '2021/8/23 12:00:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升2.jpg', '团队', 'false', 'false', '31', '108');
INSERT INTO `addact` VALUES ('33', '6', '谭人升', '2021/8/23 13:50:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升3.jpg', '团队', 'false', 'false', '31', '108');
INSERT INTO `addact` VALUES ('34', '8', '张涛', '2021/8/20 17:02:30', '成都', 'http://121.41.109.167/runkool/img/张涛.jpeg', '团队', 'true', 'false', '44', '86');
INSERT INTO `addact` VALUES ('35', '9', '张财源', '2021/8/21 17:04', '西南石油大学南门', 'http://121.41.109.167/runkool/img/张财源2.jpg', '团队', 'false', 'false', '30', '104');
INSERT INTO `addact` VALUES ('36', '6', '张涛', '2021/8/20 17:02:30', '成都', 'http://121.41.109.167/runkool/img/张涛.jpeg', '团队', 'true', 'false', '44', '86');
INSERT INTO `addact` VALUES ('37', '9', '张财源', '2021/8/21 17:05', '西南石油大学', 'http://121.41.109.167/runkool/img/张财源1.jpeg', '团队', 'false', 'false', '30', '104');
INSERT INTO `addact` VALUES ('38', '5', '六喜部落', '2021/09/25 12:30:20', '西南石油', 'http://121.41.109.167/runkool/img/谢良勇1.jpeg', '团队', 'false', 'true', '28', '104');
INSERT INTO `addact` VALUES ('39', '5', '谢良勇', '2021/09/30 13:30:59', '家里', 'http://121.41.109.167/runkool/img/谢良勇2.jpeg', '个人', 'false', 'false', '28', '104');
INSERT INTO `addact` VALUES ('40', '5', '谢良勇', '2021/10/03 12:30:00', '北京', 'http://121.41.109.167/runkool/img/谢良勇3.jpeg', '团队', 'false', 'false', '28', '104');
INSERT INTO `addact` VALUES ('42', '7', '谭人升', '2021/8/23  11:59:00', '西南石油大学', 'http://121.41.109.167/runkool/img/谭人升1.jpg', '团队', 'false', 'false', '31', '108');

-- ----------------------------
-- Table structure for `addblog`
-- ----------------------------
DROP TABLE IF EXISTS `addblog`;
CREATE TABLE `addblog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `grade` bigint(20) DEFAULT NULL,
  `maxnum` varchar(45) DEFAULT NULL,
  `personnum` varchar(45) DEFAULT NULL,
  `isopen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of addblog
-- ----------------------------
INSERT INTO `addblog` VALUES ('16', '5', '六囍部落', '1', '360', '1', '私有');
INSERT INTO `addblog` VALUES ('17', '6', '六囍部落', '1', '360', '1', '私有');
INSERT INTO `addblog` VALUES ('18', '6', '阿尔宙斯', '1', '66', '1', '开放');
INSERT INTO `addblog` VALUES ('22', '8', '勇敢牛牛', '1', '100', '1', '开放');
INSERT INTO `addblog` VALUES ('23', '9', '飞屋环游记', '1', '100', '1', '开放');
INSERT INTO `addblog` VALUES ('24', '9', '阿尔宙斯', '1', '66', '1', '开放');
INSERT INTO `addblog` VALUES ('26', '9', '飞屋环游记', '1', '100', '11', '开放');
INSERT INTO `addblog` VALUES ('27', '9', '勇敢牛牛', '1', '100', '11', '开放');
INSERT INTO `addblog` VALUES ('28', '9', '飞屋环游记', '1', '100', '111', '开放');
INSERT INTO `addblog` VALUES ('29', '9', '飞屋环游记', '1', '100', '1111', '开放');
INSERT INTO `addblog` VALUES ('45', '6', '六囍部落', '1', '360', '2', '私有');
INSERT INTO `addblog` VALUES ('48', '7', '程序员大作战', '1', '100', '2', '私有');
INSERT INTO `addblog` VALUES ('50', '7', '六囍部落', '1', '100', '3', '私有');
INSERT INTO `addblog` VALUES ('51', '5', '鸿兴', '1', '50', '1', '私有');
INSERT INTO `addblog` VALUES ('52', '5', '喜马', '1', '100', '1', '私有');

-- ----------------------------
-- Table structure for `pravitecars`
-- ----------------------------
DROP TABLE IF EXISTS `pravitecars`;
CREATE TABLE `pravitecars` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pravitecars
-- ----------------------------
INSERT INTO `pravitecars` VALUES ('1', '9', 'first', '2021/08/21 17:06:43', '30:104');
INSERT INTO `pravitecars` VALUES ('2', '5', '谢良勇', '2021/08/21 17:55:18', '28:104');
INSERT INTO `pravitecars` VALUES ('3', '5', 'first', '2021/08/22 09:04:53', '28:104');
INSERT INTO `pravitecars` VALUES ('4', '5', 'second', '2021/08/22 09:05:15', '28:104');
INSERT INTO `pravitecars` VALUES ('6', '7', '跑步三公里', '2021/08/22 10:24:52', '31:106');
INSERT INTO `pravitecars` VALUES ('7', '7', '程序员实训', '2021/08/22 10:25:03', '31:106');
INSERT INTO `pravitecars` VALUES ('8', '7', '健身打卡', '2021/08/22 10:25:18', '31:106');
INSERT INTO `pravitecars` VALUES ('9', '7', '乐健体育', '2021/08/22 14:38:02', '31:106');

-- ----------------------------
-- Table structure for `surrblog`
-- ----------------------------
DROP TABLE IF EXISTS `surrblog`;
CREATE TABLE `surrblog` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `maxnum` varchar(45) DEFAULT NULL,
  `personnum` varchar(45) DEFAULT NULL,
  `grade` bigint(20) DEFAULT NULL,
  `isopen` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of surrblog
-- ----------------------------
INSERT INTO `surrblog` VALUES ('16', '7', '程序员大作战', '100', '2', '1', '私有');
INSERT INTO `surrblog` VALUES ('17', '7', '六囍部落', '100', '3', '1', '私有');
INSERT INTO `surrblog` VALUES ('18', '5', '鸿兴', '50', '1', '1', '私有');
INSERT INTO `surrblog` VALUES ('19', '5', '喜马', '100', '1', '1', '私有');

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `openid` varchar(200) DEFAULT NULL,
  `sessionkey` varchar(200) DEFAULT NULL,
  `token` varchar(200) DEFAULT NULL,
  `phone` varchar(45) DEFAULT NULL,
  `num` varchar(45) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `sex` varchar(45) DEFAULT NULL,
  `address` varchar(45) DEFAULT NULL,
  `work` varchar(45) DEFAULT NULL,
  `grade` bigint(20) DEFAULT NULL,
  `ct` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('5', 'oEVIj5HeHRy0XIxSCks3ieAbp0Yw', 'ZgKUT7m1Vo0fxQ/lK92CwA==', '72a52726b10554b229ee6b162ba90716', '18113813922', '18113813922', '一生情画薇妮', '5978488078bbf077405da301a1fba3cc', 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJc2mr9DuPxzhZsicibASP34o6AJyLOxFFM0Q714NPwXFR1Yu2H4Afsxz6e6BdyiaiaTlSOJ2XvHtuawA/132', '男', 'Sichuan', '', '1', '摩羯');
INSERT INTO `user` VALUES ('6', 'oEVIj5OqdHHu-1BZL_qukq3KQf0k', 'xltJ75fdLXRA6/+Tnt0/CA==', 'dcbd8c0cad0cf4292117c6c81cb7799f', '15334570413', '15334570413', '入梦', '5978488078bbf077405da301a1fba3cc', 'https://thirdwx.qlogo.cn/mmopen/vi_32/J9YKHoKKd1LmCvuCSJicDUbqyUlvKgbqMcWHnHPNkyjukPlbF3WkWbp4GVvGZ1V3QAuUYMpC6DiaUicKHOzNQeTxw/132', '男', '重庆', '西南石油大学', '1', '狮子');
INSERT INTO `user` VALUES ('7', 'oEVIj5NwIer255ci9J1qs3gF1cBQ', 'EXc7o1c2YEiqC11f3+gQ+w==', '796c8dfa96777118911ff43bdc2c31ba', '13649053868', '13649053868', 'Despite', '10b17ee5f6f4398e3d79a4898e7c277e', 'wxfile://tmp_cfb02b3d0e96ebbfba8aa8085f9b5799.jpg', '男', 'Sichuan', '', '1', 'null');
INSERT INTO `user` VALUES ('8', 'oEVIj5IvnkTy5hiAA5_EuB_h9w9Y', 'f0OTtv6ArolSoR6HsVzSOQ==', '117a14eeb7255a361f58f9e5a8b40301', '17882209181', '17882209181', '__', 'c4a33ed29ac1af85c3d94395ce8c7782', 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTI9jnHckR5O21UuRNEx6lfmX4OaEqMsJcV0tbufb4AZMNcuV3mfD8brRy39XkdQfSIick1LxgJH4rQ/132', '女', '', '', '1', null);
INSERT INTO `user` VALUES ('9', 'oEVIj5Px0-OeciFymZEu0F6aYhho', 'JGbfgGHURDW7s8+wuv3c6A==', '28f597cd9101c28bb96e18526c623642', '19982071162', '19982071162', '星小辰', 'ba25939ebc45a2124e2f3b4d91509073', 'https://thirdwx.qlogo.cn/mmopen/vi_32/iaqC9Et8ES0Dc9BQBvc02RYYw4G1sM2fFlx374Oxq9FVh1Dj94shqPm1nMekzOr9gIV5VVQc1yXWVePVwkibh76A/132', '女', '', '', '1', null);
INSERT INTO `user` VALUES ('10', null, null, null, '19982026904', '19982026904', '入梦', '5978488078bbf077405da301a1fba3cc', 'https://thirdwx.qlogo.cn/mmopen/vi_32/vOEpyrefzU0icFKwSCGceMJqmMgtOib2ad2icaTmU3O2jibvYzKqkBZFtCQibsm7B8iau46D8GW73MbNMPXfncMqBicjw/132', '女', '', '', '1', null);
INSERT INTO `user` VALUES ('11', null, null, null, '18113812922', '18113812922', '一生情画薇妮', '83ce009acfdd3ff43532a8591a65ae44', 'https://thirdwx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJc2mr9DuPxzhZsicibASP34o6AJyLOxFFM0Q714NPwXFR1Yu2H4Afsxz6e6BdyiaiaTlSOJ2XvHtuawA/132', '男', 'Sichuan', '', '1', null);

-- ----------------------------
-- Table structure for `userimgs`
-- ----------------------------
DROP TABLE IF EXISTS `userimgs`;
CREATE TABLE `userimgs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `userid` bigint(20) DEFAULT NULL,
  `img` varchar(200) DEFAULT NULL,
  `type` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userimgs
-- ----------------------------
INSERT INTO `userimgs` VALUES ('1', '0', 'run1.jpeg', 'nav');
INSERT INTO `userimgs` VALUES ('2', '0', 'run2.jpeg', 'nav');
INSERT INTO `userimgs` VALUES ('3', '0', 'run3.jpeg', 'nav');
INSERT INTO `userimgs` VALUES ('4', '0', 'run4.jpeg', 'nav');
INSERT INTO `userimgs` VALUES ('5', '0', 'run5.jpeg', 'nav');
INSERT INTO `userimgs` VALUES ('18', '9', 'wxfile://tmp_65366b4e22830472d3e7f205b23764051f7c0736b7ae96de.jpg', 'show');
INSERT INTO `userimgs` VALUES ('19', '9', 'wxfile://tmp_3cd359a453b8f557197d8673653bbbb020fcc57e00919420.jpg', 'show');
INSERT INTO `userimgs` VALUES ('20', '9', 'wxfile://tmp_4979fae0885d34f49ba73e3dde8de193b75e00f849bbe6b4.jpg', 'show');
INSERT INTO `userimgs` VALUES ('24', '7', 'wxfile://tmp_18981d7b06923e05d5b0bb961fb3cb73.jpg', 'show');
INSERT INTO `userimgs` VALUES ('25', '7', 'wxfile://tmp_25e79beda9bb605295063bc26327b72f.jpg', 'show');

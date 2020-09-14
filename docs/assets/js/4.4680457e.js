(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{191:function(a,t,l){a.exports=l.p+"assets/img/25.9dbf9eb9.png"},192:function(a,t,l){a.exports=l.p+"assets/img/26.978b42e2.png"},193:function(a,t,l){a.exports=l.p+"assets/img/27.47400fa3.png"},194:function(a,t,l){a.exports=l.p+"assets/img/28.1d948dfd.png"},195:function(a,t,l){a.exports=l.p+"assets/img/29.69c7a6bb.png"},196:function(a,t,l){a.exports=l.p+"assets/img/30.16a805b0.png"},197:function(a,t,l){a.exports=l.p+"assets/img/34.7474b6f1.png"},198:function(a,t,l){a.exports=l.p+"assets/img/31.2b6416c2.png"},199:function(a,t,l){a.exports=l.p+"assets/img/32.71e48138.png"},200:function(a,t,l){a.exports=l.p+"assets/img/33.69106c7d.png"},273:function(a,t,l){"use strict";l.r(t);var s=[function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",{staticClass:"content"},[s("h1",{attrs:{id:"数据表操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据表操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 数据表操作")]),a._v(" "),s("ul",[s("li",[a._v("数据表(或称表)是数据库最重要的组成部分之一，是其他对象的基础")])]),a._v(" "),s("h2",{attrs:{id:"基本操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 基本操作")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("打开数据库")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("USE db_name;\n")])])]),s("img",{attrs:{src:l(191),width:"450px"}})])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("创建数据表")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE TABLE [IF NOT EXISTS] table_name(\n  column_name data_type，\n  ...\n)\n")])])]),s("img",{attrs:{src:l(192),width:"450px"}})])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("查看数据表列表")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW TABLES [FROM db_name] [LIKE 'pattern' | WHERE expr]\n")])])])]),a._v(" "),s("li",[s("p",[a._v("查看数据表结构")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SHOW COLUMNS FROM tbl_name\n")])])])]),a._v(" "),s("li",[s("p",[a._v("插入记录")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("INSERT [INTO] tbl_name [(col_name，...)] VALUES (val，...)\n")])])])]),a._v(" "),s("li",[s("p",[a._v("记录查找")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("SELECT expr，... FROM tbl_name\n")])])])]),a._v(" "),s("li",[s("p",[a._v("空值与非空")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("NULL 字段值可以为空")])]),a._v(" "),s("li",[s("p",[a._v("NOT NULL 字段值禁止为空")])])]),a._v(" "),s("img",{attrs:{src:l(193),width:"450px"}})]),a._v(" "),s("li",[s("p",[a._v("AUTO_INCREMENT")]),a._v(" "),s("ul",[s("li",[a._v("自动编号，且必须与主键组合使用")])]),a._v(" "),s("ul",[s("li",[a._v("默认情况下，起始值为 1，每次的增量为 1")])])]),a._v(" "),s("li",[s("p",[a._v("PRIMARY KEY")]),a._v(" "),s("ul",[s("li",[a._v("主键约束")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("每张数据表只能存在一个主键")])]),a._v(" "),s("li",[s("p",[a._v("主键保证记录的唯一性")])]),a._v(" "),s("li",[s("p",[a._v("主键自动为 NOT NULL")])])]),a._v(" "),s("img",{attrs:{src:l(194),width:"450px"}})]),a._v(" "),s("li",[s("p",[a._v("UNIQUE KEY")]),a._v(" "),s("ul",[s("li",[a._v("唯一约束")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("唯一约束可以保证记录的唯一性")])]),a._v(" "),s("li",[s("p",[a._v("唯一约束的字段可以为空值(NULL)")])]),a._v(" "),s("li",[s("p",[a._v("每张数据表可以存在多个唯一约束")])])]),a._v(" "),s("img",{attrs:{src:l(195),width:"450px"}}),a._v(" "),s("img",{attrs:{src:l(196),width:"450px"}})]),a._v(" "),s("li",[s("p",[a._v("默认约束")]),a._v(" "),s("ul",[s("li",[a._v("默认值")])]),a._v(" "),s("ul",[s("li",[a._v("当插入记录时，如果没有明确为字段赋值，则自动赋予默认值")])])])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("修改数据表")]),a._v(" "),s("ul",[s("li",[a._v("添加列")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name ADD [COLUMN] col_name column_definition [FIRST|AFTER col_name]\n")])])]),s("img",{attrs:{src:l(197),width:"450px"}}),a._v(" "),s("ul",[s("li",[a._v("添加多列")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name ADD [COLUMN] (col_name column_definition,...)\n")])])]),s("ul",[s("li",[a._v("删除列")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name DROP [COLUMN] col_name\n")])])]),s("ul",[s("li",[a._v("添加主键约束")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name ADD [CONSTRAINT [symbol]] PRIMARY KEY [index_type] (index_col_name,...)\n")])])]),s("ul",[s("li",[a._v("添加/删除默认约束")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name ALTER [COLUMN] col_name {SET DEFAULT literal | DROP DEFAULT}\n")])])]),s("ul",[s("li",[a._v("删除主键约束")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name DROP PRIMARY KEY\n")])])]),s("ul",[s("li",[a._v("删除唯一约束")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name DROP {INDEX|KEY} index_name\n")])])]),s("ul",[s("li",[a._v("删除外键约束")])]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name DROP FOREIGN KEY fk_symbol\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改列定义")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name MODIFY [COLUMN] col_name column_definition [FIRST|AFTER col_name]\n")])])])]),a._v(" "),s("li",[s("p",[a._v("修改列名称")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name CHANGE [COLUMN] old_col_name new_col_name column_definition [FIRST|AFTER col_name]\n")])])])]),a._v(" "),s("li",[s("p",[a._v("数据表更名")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER TABLE tbl_name RENAME [TO|AS] new_tbl_name\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("RENAME TABLE tbl_name TO new_tbl_name\n")])])])])]),a._v(" "),s("h2",{attrs:{id:"约束操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束操作","aria-hidden":"true"}},[a._v("#")]),a._v(" 约束操作")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("约束保证数据的完整性和一致性")])]),a._v(" "),s("li",[s("p",[a._v("约束分为表级约束和列级约束")])]),a._v(" "),s("li",[s("p",[a._v("约束类型包括：")]),a._v(" "),s("ul",[s("li",[a._v("NOT NULL(非空约束)")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("PRIMARY KEY(主键约束)")])]),a._v(" "),s("li",[s("p",[a._v("UNIQUE KEY(唯一约束)")])]),a._v(" "),s("li",[s("p",[a._v("DEFAULT(默认约束)")])]),a._v(" "),s("li",[s("p",[a._v("FOREIGN KEY(外键约束)")])])])])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("FOREIGN KEY")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("保持数据一致性，完整性")])]),a._v(" "),s("li",[s("p",[a._v("实现一对一或一对多关系")])])])]),a._v(" "),s("li",[s("p",[a._v("外键约束的要求")]),a._v(" "),s("ul",[s("li",[a._v("父表和子表必须使用相同的存储引擎，而且禁止使用临时表，数据表的存储引擎只能为 INNODB")])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("外键列和参照列必须具有相似的数据类型，其中数字的长度或是否有符号位必须相同；而字符的长度则可以不同")])]),a._v(" "),s("li",[s("p",[a._v("外键列和参照列必须创建索引，如果外键列不存在索引的话 MySQL 将自动创建索引")])])])]),a._v(" "),s("li",[s("p",[a._v("编辑数据表的默认存储引擎，修改 MySQL 配置文件")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("default-storage-engine=INNODB\n")])])]),s("img",{attrs:{src:l(198),width:"450px"}}),a._v(" "),s("img",{attrs:{src:l(199),width:"450px"}})]),a._v(" "),s("li",[s("p",[a._v("外键约束的参照操作")]),a._v(" "),s("ul",[s("li",[s("p",[a._v("CASCADE：从父表删除或更新且自动删除或更新子表中匹配的行")])]),a._v(" "),s("li",[s("p",[a._v("SET NULL：从父表删除或更新行，并设置子表中的外键列为 NULL，如果使用该选项，必须保证子表列没有指定 NOT NULL")])])]),a._v(" "),s("ul",[s("li",[s("p",[a._v("RESTRICT：拒绝对父表的删除或更新操作")])]),a._v(" "),s("li",[s("p",[a._v("NO ACTION：标准 SQL 的关键字，在 MySQL 中与 RESTRICT 相同")])])]),a._v(" "),s("img",{attrs:{src:l(200),width:"450px"}})]),a._v(" "),s("li",[s("p",[a._v("对一个数据列建立的约束，称为列级约束")])]),a._v(" "),s("li",[s("p",[a._v("对多个数据列建立的约束，称为表级约束")])]),a._v(" "),s("li",[s("p",[a._v("列级约束既可以在列定义时声明，也可以在列定义后声明，表级约束只能在列定义后声明")])])])])}],e=l(0),_=Object(e.a)({},function(){this.$createElement;this._self._c;return this._m(0)},s,!1,null,null,null);t.default=_.exports}}]);
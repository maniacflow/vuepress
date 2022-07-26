(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{527:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"管理群组属性"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理群组属性"}},[t._v("#")]),t._v(" 管理群组属性")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#技术原理"}},[t._v("技术原理")])]),s("li",[s("a",{attrs:{href:"#前提条件"}},[t._v("前提条件")])]),s("li",[s("a",{attrs:{href:"#实现方法"}},[t._v("实现方法")]),s("ul",[s("li",[s("a",{attrs:{href:"#修改群组名称"}},[t._v("修改群组名称")])]),s("li",[s("a",{attrs:{href:"#修改群组描述"}},[t._v("修改群组描述")])]),s("li",[s("a",{attrs:{href:"#更新群公告"}},[t._v("更新群公告")])]),s("li",[s("a",{attrs:{href:"#获取群公告"}},[t._v("获取群公告")])]),s("li",[s("a",{attrs:{href:"#管理共享文件"}},[t._v("管理共享文件")])]),s("li",[s("a",{attrs:{href:"#更新群扩展字段"}},[t._v("更新群扩展字段")])]),s("li",[s("a",{attrs:{href:"#更多操作"}},[t._v("更多操作")])])])])])]),s("p"),t._v(" "),s("p",[t._v("群组是支持多人沟通的即时通讯系统，本文指导你如何使用环信即时通讯 IM Android SDK 在实时互动 app 中实现群组属性相关功能。")]),t._v(" "),s("h2",{attrs:{id:"技术原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术原理"}},[t._v("#")]),t._v(" 技术原理")]),t._v(" "),s("p",[t._v("环信即时通讯 IM Android SDK 提供 "),s("code",[t._v("EMGroupManager")]),t._v(" 类和 "),s("code",[t._v("EMGroup")]),t._v(" 类用于群组管理，支持你通过调用 API 在项目中实现如下功能：")]),t._v(" "),s("ul",[s("li",[t._v("修改群组名称及描述")]),t._v(" "),s("li",[t._v("获取、更新群组公告")]),t._v(" "),s("li",[t._v("管理群组共享文件")]),t._v(" "),s("li",[t._v("更新群扩展字段")])]),t._v(" "),s("h2",{attrs:{id:"前提条件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#前提条件"}},[t._v("#")]),t._v(" 前提条件")]),t._v(" "),s("p",[t._v("开始前，请确保满足以下条件：")]),t._v(" "),s("ul",[s("li",[t._v("完成 SDK 初始化，详见 "),s("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/quickstart",target:"_blank",rel:"noopener noreferrer"}},[t._v("快速开始"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("了解环信即时通讯 IM 的使用限制，详见 "),s("a",{attrs:{href:"https://docs-im.easemob.com/ccim/limitation",target:"_blank",rel:"noopener noreferrer"}},[t._v("使用限制"),s("OutboundLink")],1),t._v("。")]),t._v(" "),s("li",[t._v("了解群组和群成员的数量限制，详见 "),s("a",{attrs:{href:"https://www.easemob.com/pricing/im",target:"_blank",rel:"noopener noreferrer"}},[t._v("套餐包详情"),s("OutboundLink")],1),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"实现方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现方法"}},[t._v("#")]),t._v(" 实现方法")]),t._v(" "),s("p",[t._v("本节介绍如何使用环信即时通讯 IM Android SDK 提供的 API 实现上述功能。")]),t._v(" "),s("h3",{attrs:{id:"修改群组名称"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群组名称"}},[t._v("#")]),t._v(" 修改群组名称")]),t._v(" "),s("p",[t._v("仅群主和群管理员可以调用 "),s("code",[t._v("changeGroupName")]),t._v(" 方法设置和修改群组名称，群名称的长度限制为 128 个字符。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncChangeGroupName(String, String, EMCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeGroupName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("changedGroupName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"修改群组描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改群组描述"}},[t._v("#")]),t._v(" 修改群组描述")]),t._v(" "),s("p",[t._v("仅群主和群管理员可以调用 "),s("code",[t._v("changeGroupDescription")]),t._v(" 方法设置和修改群组描述，群描述的长度限制为 512 个字符。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncChangeGroupDescription(String, String, EMCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("changeGroupDescription")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("description"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"更新群公告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新群公告"}},[t._v("#")]),t._v(" 更新群公告")]),t._v(" "),s("p",[t._v("仅群主和群管理员可以调用 "),s("code",[t._v("updateGroupAnnouncement")]),t._v(" 方法设置和更新群公告，群公告的长度限制为 512 个字符。群公告更新后，其他群成员收到 "),s("code",[t._v("EMGroupChangeListener#onAnnouncementChanged")]),t._v(" 回调。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncUpdateGroupAnnouncement(String, String, EMCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateGroupAnnouncement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" announcement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"获取群公告"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#获取群公告"}},[t._v("#")]),t._v(" 获取群公告")]),t._v(" "),s("p",[t._v("所有群成员均可以调用 "),s("code",[t._v("fetchGroupAnnouncement")]),t._v(" 方法从服务器获取群公告。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncFetchGroupAnnouncement(String, EMValueCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchGroupAnnouncement")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"管理共享文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#管理共享文件"}},[t._v("#")]),t._v(" 管理共享文件")]),t._v(" "),s("h4",{attrs:{id:"上传共享文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#上传共享文件"}},[t._v("#")]),t._v(" 上传共享文件")]),t._v(" "),s("p",[t._v("所有群组成员均可以调用 "),s("code",[t._v("uploadGroupSharedFile")]),t._v(" 方法上传共享文件至群组，群共享文件大小限制为 10 MB。上传共享文件后，其他群成员收到 "),s("code",[t._v("EMGroupChangeListener#OnSharedFileAddedFromGroup")]),t._v(" 回调。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncUploadGroupSharedFile(String, String, EMCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("uploadGroupSharedFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" filePath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callBack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"删除共享文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#删除共享文件"}},[t._v("#")]),t._v(" 删除共享文件")]),t._v(" "),s("p",[t._v("所有群成员均可以调用 "),s("code",[t._v("DeleteGroupSharedFile")]),t._v(" 方法删除群共享文件。删除共享文件后，其他群成员收到 "),s("code",[t._v("EMGroupChangeListener#OnSharedFileDeletedFromGroup")]),t._v(" 回调。")]),t._v(" "),s("p",[t._v("群主和群管理员可删除全部的群共享文件，群成员只能删除自己上传的群文件。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncDeleteGroupSharedFile(String, String, EMCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("deleteGroupSharedFile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" fileId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"从服务器获取共享文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#从服务器获取共享文件"}},[t._v("#")]),t._v(" 从服务器获取共享文件")]),t._v(" "),s("p",[t._v("所有群成员均可以调用 "),s("code",[t._v("fetchGroupSharedFileList")]),t._v(" 方法从服务器获取群组的共享文件列表。")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 异步方法见 {@link #asyncFetchGroupSharedFileList(String, int, int, EMValueCallBack)}。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("fetchGroupSharedFileList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageNum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pageSize"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"更新群扩展字段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更新群扩展字段"}},[t._v("#")]),t._v(" 更新群扩展字段")]),t._v(" "),s("p",[t._v("仅群主和群管理员可以调用 "),s("code",[t._v("updateGroupExtension")]),t._v(" 方法更新群组的扩展字段，群组扩展字段设置 JSON 格式的数据，用于自定义更多群组信息。群扩展字段的长度限制为 8 KB。")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 同步方法，会阻塞当前线程。")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("EMClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInstance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupManager")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateGroupExtension")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" extension"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"更多操作"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#更多操作"}},[t._v("#")]),t._v(" 更多操作")]),t._v(" "),s("p",[t._v("你可以参考如下文档，在项目中实现更多的群组相关功能：")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/group1",target:"_blank",rel:"noopener noreferrer"}},[t._v("群组概述"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/group2",target:"_blank",rel:"noopener noreferrer"}},[t._v("创建和管理群组以及监听器介绍"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://docs-im.easemob.com/ccim/android/group3",target:"_blank",rel:"noopener noreferrer"}},[t._v("群成员管理"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);
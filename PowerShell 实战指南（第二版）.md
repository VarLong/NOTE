# PowerShell 实战指南（第二版）

------
Shell是忽略大小写的。
> * Update-Help 更新帮助文档
> * Get-Help Get-EventLog 获取帮助文档
> * Get-Help Get-EventLog -examples 可以获取示例。
> * Show-Command Get-EventLog 获取参数。
> * Dir * 查看当前文件夹下所有文件。
> * Get-Process | Export-Csv procs.csv 将Process 信息打印到Excel文件中。
> * Compare-Object (Diff) 比较两个结果。
> * Dir > DirectoryList.txt, 打印输出结果到DirectoryList.txt， 其实执行的是Dir | Out-File DirectoryList.txt. Out-File 创建的文件只有80列。
> * ConvertTo-HTML 用PowerShell生成HTML 文档。可以增加参数关联css文档。
Get-Service | ConvertTo-HTML | Out-File service.html
> * "$ConfirmPreference" 当comlet的内部影响级别大于shell的$ConfirmPreference影响级别时， 不管cmdlets要做什么，shell都会进行询问。当cmdlet内部影响小于shell时候不会询问。
> * PSModulePath 是操作系统中环境变量的一部分， 该路径很重要。通过这个变量， 可以加载位于计算机上的所有模块。
> * Get-Member 获取cmdlet的属性和方法。
> * Get-ADCpmouter 获取域中的计算机对象， 需要在Windows Server上并且包含ActiveDirectory模块。


------

> **参数集**和**通用参数**： 明白当前命令行使用哪个参数集是非常重要的。通用参数是在每一个ComandLet里面都会出现的参数。 8个
**可选参数**： 必须是参数名和参数类型同时放到一个中括号中[[-InstanceId] <Int64>] ,如果是必选参数 会是[-LogName] <string>, 参数名和参数类型不会放到一个中括号中.
>Microsoft Visual Studio Team Foundation Server。 方括号代表的是参数值
**定位参数**： 就是不需要输入参数名字的 例如[-LogName] <string> ， 放在中括号中， 只需要输入log 的名字就可以。
**非定位参数**： [-Before <DateTime>] 使用的时候需要键入参数的名字。
**CmdLet**是一个原生的PowerShell命令行工具。用.Net Framework实现。**函数**使用PowerShell自己的脚本语言编写。**工作流**是嵌入PowerShell的工作流执行系统的一类函数。 即编写的powershell脚本。

* 如果有定位参数和非定位参数， 必须先输入定位参数， 在输入非定位参数。
* 不论定位参数还是非定位参数， 输入参数名总是正确的。 当输入参数名的时候输入顺序变得不重要。 不输入参数名时要注意位置。通常的输入类型： String, Int, Int30, Int64, DateTime
* PowerShell 通常把逗号作为分隔符当成数组对待。
* PowerShell 任何一个单一的值如果包含了空格， 就必须使用引号。
* PowerShell 用一个圆括号把命令括起来，就强制这些命令先执行。
  Get-EventLog Application -comuter (Get-Content name.txt)
* PowerShell PowerShell 拥有能够访问整个.Net Framework底层的能力

### mdLet 命名惯例：
1. 规则应该以标准的动词开始， 比如Set， Get， New
2. 横线链接动词-名词。
3. 名字可以有别名。Get-Alias -Definition "Get-Service"  gsv。 可以使用New-Alias创建自定义的别名。 其生命周期只有当前shell。

### PSProvider
Get-PSProvider
| Name         |    |  Value  |
| --------   | -----:  | :----:  |
| Registry         | ShouldProcess, Transactions  支持-WhatIf和-Confirm，对执行脚本测试。   |  {HKLM, HKCU}  |
| Alias     | ShouldProcess |   {Alias}     |
| Environment        |   ShouldProcess  |   {Env}    |
| FileSystem       |   Filter, ShouldProcess, Credentials    | {C, D}    |
| Function       |    ShouldProcess    |  {Function}     |
| Variable       |    ShouldProcess    |  {Variable}    |
Windows 文件系统主要由三种对象： 磁盘驱动器， 文件夹， 文件。 但是PowerShell不使用文件系统。 PowerShell使用“项”， “Item”， 一个文件或者一个文件夹就是一个Item。每个Item都有对应的属性， 如最后的写入
时间，只读 等等.
在PowerShell中创建新的Item是比较麻烦的任务， 因为Item对具体的目标并没有细致的区分。可以创建注册表， 文件， 文件夹。 所以你需要告诉cmd要创建什么类型。但是如果用MDDir就可以直接创建Folder。 MKDir
是一个函数。

PowerShell 通过管道pipeline 把命令互相链接。管道通过传输一个命令， 把其作为输出传到另一个cmdlet输入。

使用CmdLets修改系统： 终止进程和停止服务。
Get-Process | Stop-Process

### 扩展命令

PowerShell存在两种类型的扩展方式， **模块**和**管理单元**

Get-PSSnapin 获取管理单元， 如果安装了SQL-server 就能拿到SQL-Server的管理单元。
 
 ### 命令冲突和移除扩展
当两个相同的命令同时加载， 例如Get-User， PowerShell会执行最后一个模块的命令。如果想要执行某一个某块下的命令， 使用MyCollPowerShellSpin\Get-User， 前面是模块单元的名字。增加前缀可以防止冲突。

### 配置脚本：启动shell时候预加载
在PSModulePath中放进模块。

Windows 本身就是一个面向对象的操作系统。

Unix和Linux从业人员喜欢类似Perl的语言， 因为语言包含丰富的文本解析和文本操作方法。

PowerShell所有的对象来源都只包含属性。 comlet 、.NetFramework等等， 后来的属性是PowerShell中的扩展系统（ETC）添加的。为了保持一致性。
一个对象除了属性和方法之外， 还有时间， 事件是以对象的方式通知你某些事情发生了。例如一个进程对象，可以在进程结束时触发Exited事件。然后将自己的名利附加到这些事件上。

PowerShell pipeline在最后一个命令执行之前总是传递对象。在最后一个命令执行时， PowerShell将会查看管道中所包含的对象， 并根据不同的配置文件决定哪一个属性呗用于构建输出。
* PoserShell帮助文件不包含有关对象的属性的信息， 你必须将对象利用管道传输给GM来查看属性列表

### 管道， pipeline
PowerShell如何传输数据给管道？
以 Get-Content .\computer.txt | Get-Service 为例
当Get-Content运行时， 会将计算机的名称放到管道中。 然后PowerShell决定如何将数据结果传递给Get-Service命令，但是PowerShell一次只能使用单个参数来接收传入数据。所以Get-Service必须决定哪个参数接受Get-Content 的结果。这个决定的过程称为  **管道参数绑定**。

1.使用ByValue进行管道参数绑定。 PowerSell会确认result的数据对象类型。然后查看B命令中的哪个参数可以接收经由管道传过来的对象的类型。
2.使用ByPropertyName 进行管道参数绑定。

（）括号优先执行。

PowerShell的输出可以进行格式化。让输出更美观。

过滤， 
左过滤，： 左过滤意味着极可能吧过滤条件放置在左侧或者靠近命令行开始的部分， 越早过滤掉不需要的对象就越能减轻其他comdlets命令的工作。
### 对比操作符：
-eq： 相等
-ne： 不等于
-ge： 大于等于
-le： 小于等于
-gt： 大于
-lt： 小于
-and
-or
powershell用$False 和 $True表示false和true   
过滤对象的管道， 过滤掉其他信息， 只留下正在运行的服务。
Get-Server | Where-Object -filter {$_.Status -eq "Running"}
当你传递多个对象到 Where-Object ， 他会检查每个对象从而进行过滤。

$_, 为占位符， 标识的每次放置的一个对象。是一个特殊的产物。

























































### [Windows/Mac/Linux 全平台客户端](https://www.zybuluo.com/cmd/)

> 请保留此份 Cmd Markdown 的欢迎稿兼使用说明，如需撰写新稿件，点击顶部工具栏右侧的 <i class="icon-file"></i> **新文稿** 或者使用快捷键 `Ctrl+Alt+N`。



，**粗体** 或者 *斜体* 某些文字，更棒的是，它还可以

- [ ] 支持以 PDF 格式导出文稿
- [ ] 改进 Cmd 渲染算法，使用局部渲染技术提高渲染效率
- [x] 新增 Todo 列表功能
- [x] 修复 LaTex 公式渲染问题
- [x] 新增 LaTex 公式编号功能

### 7. 绘制表格

| 项目        | 价格   |  数量  |
| --------   | -----:  | :----:  |
| 计算机     | \$1600 |   5     |
| 手机        |   \$12   |   12   |
| 管线        |    \$1    |  234  |

些诉求的回应整合在 Cmd Markdown，并且一次，两次，三次，乃至无数次地提升这个工具的体验，最终将它演化成一个 **编辑/发布/阅读** Markdown 的在线平台——您可以在任何地方，任何系统/设备上管理这里的文字。

通过管理工具栏可以：

<i class="icon-share"></i> 发布：将当前的文稿生成固定链接，在网络上发布，分享
<i class="icon-file"></i> 新建：开始撰写一篇新的文稿
<i class="icon-trash"></i> 删除：删除当前的文稿
<i class="icon-cloud"></i> 导出：将当前的文稿转化为 Markdown 文本或者 Html 格式，并导出到本地
<i class="icon-reorder"></i> 列表：所有新增和过往的文稿都可以在这里查看、操作
<i class="icon-pencil"></i> 模式：切换 普通/Vim/Emacs 编辑模式
<i class="icon-list"></i> 目录：快速导航当前文稿的目录结构以跳转到感兴趣的段落
<i class="icon-chevron-sign-left"></i> 视图：互换左边编辑区和右边预览区的位置
<i class="icon-adjust"></i> 主题：内置了黑白两种模式的主题，试试 **黑色主题**，超炫！
<i class="icon-desktop"></i> 阅读：心无旁骛的阅读模式提供超一流的阅读体验
<i class="icon-fullscreen"></i> 全屏：简洁，简洁，再简洁，一个完全沉浸式的写作和阅读环境

### 8. 阅读模式

在 **阅读工具栏** 点击 <i class="icon-desktop"></i> 或者按下 `Ctrl+Alt+M` 随即进入独立的阅读模式界面，我们在版面渲染上的每一个细节：字体，字号，行间距，前背景色都倾注了大量的时间，努力提升阅读的体验和品质。





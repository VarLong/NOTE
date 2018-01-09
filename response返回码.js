

// 1xx - 信息提示

// · 100 - Continue 初始的请求已经接受，客户应当继续发送请求的其余部分。（HTTP 1.1新）
// · 101 - Switching Protocols 服务器将遵从客户的请求转换到另外一种协议（HTTP 1.1新）


// 2xx - 成功： 这类状态代码表明服务器成功地接受了客户端请求。

// · 200 - OK 一切正常，对GET和POST请求的应答文档跟在后面。
// · 201 - Created 服务器已经创建了文档，Location头给出了它的URL。
// · 202 - Accepted 已经接受请求，但处理尚未完成。
// · 203 - Non-Authoritative Information 文档已经正常地返回，但一些应答头可能不正确，因为使用的是文档的拷贝，非权威性信息（HTTP 1.1新）。
// · 204 - No Content 没有新文档，浏览器应该继续显示原来的文档。如果用户定期地刷新页面，而Servlet可以确定用户文档足够新，这个状态代码是很有用的。
// · 205 - Reset Content 没有新的内容，但浏览器应该重置它所显示的内容。用来强制浏览器清除表单输入内容（HTTP 1.1新）。
// · 206 - Partial Content 客户发送了一个带有Range头的GET请求，服务器完成了它（HTTP 1.1新）。

// 3xx - 重定向

// · 300 - Multiple Choices 客户请求的文档可以在多个位置找到，这些位置已经在返回的文档内列出。如果服务器要提出优先选择，则应该在Location应答头指明。
// · 301 - Moved Permanently 客户请求的文档在其他地方，新的URL在Location头中给出，浏览器应该自动地访问新的URL。
// · 302 - Found 类似于301，但新的URL应该被视为临时性的替代，而不是永久性的。注意，在HTTP1.0中对应的状态信息是“Moved Temporatily”。出现该状态代码时，浏览器能够自动访问新的URL，因此它是一个很有用的状态代码。注意这个状态代码有时候可以和301替换使用。例如，如果浏览器错误地请求 http://host/~user （缺少了后面的斜杠），有的服务器返回301，有的则返回302。严格地说，我们只能假定只有当原来的请求是GET时浏览器才会自动重定向。请参见 307。
// · 303 - See Other 类似于301/302，不同之处在于，如果原来的请求是POST，Location头指定的重定向目标文档应该通过GET提取（HTTP 1.1新）。
// · 304 - Not Modified 客户端有缓冲的文档并发出了一个条件性的请求（一般是提供If-Modified-Since头表示客户只想比指定日期更新的文档）。服务器告诉客户，原来缓冲的文档还可以继续使用。

// 4xx - 客户端错误
//  · 400 - Bad Request 请求出现语法错误。
//   401 - 登录失败。
//   403 - Forbidden 资源不可用。服务器理解客户的请求，但拒绝处理它。通常由于服务器上文件或目录的权限设置导致
//  · 404 - Not Found 无法找到指定位置的资源。这也是一个常用的应答
//  · 405 - Method Not Allowed 请求方法（GET、POST、HEAD、Delete、PUT、TRACE等）对指定的资源不适用

//  5xx - 服务器错误

// 502 - Bad Gateway 服务器作为网关或者代理时，为了完成请求访问下一个服务器，但该服务器返回了非法的应答。 亦说Web 服务器用作网关或代理服务器时收到了无效响应。
// · 502.1 - CGI 应用程序超时。


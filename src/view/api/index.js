import { Breadcrumb, Card } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';

const data = `<div class="markdown-text"><p>以下 api 路径均以 <strong><a href="https://cnodejs.org/api/v1" target="_blank">https://cnodejs.org/api/v1</a></strong> 为前缀</p>
<p>update 2019-03-21: 涉及发帖和发评论的接口都已经下线了，太多人为了测试客户端乱发帖了。</p>
<h3>主题</h3>
<h4>get /topics 主题首页</h4>
<p>接收 get 参数</p>
<ul>
<li>page <code>Number</code> 页数</li>
<li>tab <code>String</code> 主题分类。目前有 <code>ask</code> <code>share</code> <code>job</code> <code>good</code></li>
<li>limit <code>Number</code> 每一页的主题数量</li>
<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
</ul>
<p>示例：<a href="/api/v1/topics" target="_blank">/api/v1/topics</a></p>
<h4>get /topic/:id 主题详情</h4>
<p>接收 get 参数</p>
<ul>
<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
<li>accesstoken <code>String</code> 当需要知道一个主题是否被特定用户收藏以及对应评论是否被特定用户点赞时，才需要带此参数。会影响返回值中的 <code>is_collect</code> 以及 <code>replies</code> 列表中的 <code>is_uped</code> 值。</li>
</ul>
<p>示例：<a href="/api/v1/topic/5433d5e4e737cbe96dcef312" target="_blank">/api/v1/topic/5433d5e4e737cbe96dcef312</a></p>
<h3>主题收藏</h3>
<h4>post /topic_collect/collect 收藏主题</h4>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>topic_id <code>String</code> 主题的id</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="str">"success"</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre><h4>post /topic_collect/de_collect 取消主题</h4>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
<li>topic_id <code>String</code> 主题的id</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">}</span></code></pre><h4>get /topic_collect/:loginname 用户所收藏的主题</h4>
<p>示例：<a href="/api/v1/topic_collect/alsotang" target="_blank">/api/v1/topic_collect/alsotang</a></p>
<h3>用户</h3>
<h4>get /user/:loginname 用户详情</h4>
<p>示例：<a href="/api/v1/user/alsotang" target="_blank">/api/v1/user/alsotang</a></p>
<h4>post /accesstoken 验证 accessToken 的正确性</h4>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code> 用户的 accessToken</li>
</ul>
<p>如果成功匹配上用户，返回成功信息。否则 403。</p>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln"> loginname</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">loginname</span><span class="pun">,</span><span class="pln"> id</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">id</span><span class="pun">,</span><span class="pln"> avatar_url</span><span class="pun">:</span><span class="pln"> req</span><span class="pun">.</span><span class="pln">user</span><span class="pun">.</span><span class="pln">avatar_url</span><span class="pun">}</span></code></pre><h3>消息通知</h3>
<h4>get /message/count 获取未读消息数</h4>
<p>接收 get 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> data</span><span class="pun">:</span><span class="pln"> </span><span class="lit">3</span><span class="pln"> </span><span class="pun">}</span></code></pre><h4>get /messages 获取已读和未读消息</h4>
<p>接收 get 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
<li>mdrender <code>String</code> 当为 <code>false</code> 时，不渲染。默认为 <code>true</code>，渲染出现的所有 markdown 格式文本。</li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">
  data</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
    has_read_messages</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[],</span><span class="pln">
    hasnot_read_messages</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln">
      </span><span class="pun">{</span><span class="pln">
        id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"543fb7abae523bbc80412b26"</span><span class="pun">,</span><span class="pln">
        type</span><span class="pun">:</span><span class="pln"> </span><span class="str">"at"</span><span class="pun">,</span><span class="pln">
        has_read</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">false</span><span class="pun">,</span><span class="pln">
        author</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          loginname</span><span class="pun">:</span><span class="pln"> </span><span class="str">"alsotang"</span><span class="pun">,</span><span class="pln">
          avatar_url</span><span class="pun">:</span><span class="pln"> </span><span class="str">"https://avatars.githubusercontent.com/u/1147375?v=2"</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        topic</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"542d6ecb9ecb3db94b2b3d0f"</span><span class="pun">,</span><span class="pln">
          title</span><span class="pun">:</span><span class="pln"> </span><span class="str">"adfadfadfasdf"</span><span class="pun">,</span><span class="pln">
          last_reply_at</span><span class="pun">:</span><span class="pln"> </span><span class="str">"2014-10-18T07:47:22.563Z"</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
        reply</span><span class="pun">:</span><span class="pln"> </span><span class="pun">{</span><span class="pln">
          id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"543fb7abae523bbc80412b24"</span><span class="pun">,</span><span class="pln">
          content</span><span class="pun">:</span><span class="pln"> </span><span class="str">"[@alsotang](/user/alsotang) 哈哈"</span><span class="pun">,</span><span class="pln">
          ups</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="pun">],</span><span class="pln">
          create_at</span><span class="pun">:</span><span class="pln"> </span><span class="str">"2014-10-16T12:18:51.566Z"</span><span class="pln">
          </span><span class="pun">}</span><span class="pln">
        </span><span class="pun">},</span><span class="pln">
    </span><span class="pun">...</span><span class="pln">
    </span><span class="pun">]</span><span class="pln">
  </span><span class="pun">}</span><span class="pln">
</span><span class="pun">}</span></code></pre><h4>post /message/mark_all 标记全部已读</h4>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln"> success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  marked_msgs</span><span class="pun">:</span><span class="pln"> </span><span class="pun">[</span><span class="pln"> </span><span class="pun">{</span><span class="pln"> id</span><span class="pun">:</span><span class="pln"> </span><span class="str">'544ce385aeaeb5931556c6f9'</span><span class="pln"> </span><span class="pun">}</span><span class="pln"> </span><span class="pun">]</span><span class="pln"> </span><span class="pun">}</span></code></pre><h4>post /message/mark_one/:msg_id 标记单个消息为已读</h4>
<p>请求示例：<a href="/message/mark_one/58ec7d39da8344a81eee0c14" target="_blank">/message/mark_one/58ec7d39da8344a81eee0c14</a></p>
<p>接收 post 参数</p>
<ul>
<li>accesstoken <code>String</code></li>
</ul>
<p>返回值示例</p>
<pre class="prettyprint language-js"><code><span class="pun">{</span><span class="pln">
  success</span><span class="pun">:</span><span class="pln"> </span><span class="kwd">true</span><span class="pun">,</span><span class="pln">
  marked_msg_id</span><span class="pun">:</span><span class="pln"> </span><span class="str">"58ec7d39da8344a81eee0c14"</span><span class="pln">
</span><span class="pun">}</span></code></pre><h3>知识点</h3>
<ol>
<li>如何获取 accessToken？
用户登录后，在设置页面可以看到自己的 accessToken。
建议各移动端应用使用手机扫码的形式登录，验证使用 <code>/accesstoken</code> 接口，登录后长期保存 accessToken。</li>
</ol>
</div>`

function PageApi(){
    return <Card
        className="topicCard"
        bodyStyle={{ padding: "10px 15px" }}
        title={
            < Breadcrumb >
                <Breadcrumb.Item><Link to='/'>首页</Link></Breadcrumb.Item>
                <Breadcrumb.Item>API</Breadcrumb.Item>
            </ Breadcrumb>
        }
    >
        <div dangerouslySetInnerHTML={{
            __html: data
        }}>
        </div>
    </Card>
}

export default PageApi;
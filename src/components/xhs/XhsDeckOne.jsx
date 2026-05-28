import React from 'react';
import { BigStatement, CardGrid, Lines, Placeholder, SplitStatement, XhsCard, XhsSlide, XhsTop } from './primitives.jsx';

const coverStats = [
  ['封面 1', '6:45', '3.9w 赞 · 4.9w 藏'],
  ['封面 2', '11:21', '1.0w 赞 · 1.1w 藏'],
  ['封面 3', '4:38', '3.0w 赞 · 3.5w 藏'],
  ['封面 4', '3:48', '1.5w 赞 · 1.6w 藏'],
  ['封面 5', '2:51', '2.1w 赞 · 2.7w 藏'],
  ['封面 6', '5:30', '3.0w 赞 · 1.6w 藏'],
];

const boundaryCards = [
  { kicker: '/ 边界 ①', title: '模型塌陷', tone: 'lime' },
  { kicker: '/ 边界 ②', title: 'Agent 的本质', tone: 'lime' },
  { kicker: '/ 边界 ③', title: '能力是缝合的', tone: 'lime' },
  { kicker: '/ 边界 ④', title: '依赖存量数据', tone: 'lime' },
];

export function Xhs01Cover() {
  return (
    <XhsSlide layout="XHS01" tone="dark" footer={{ left: '@大师的 AI 小灶', page: '01 / 26' }}>
      <div className="xhs-cover-arc" />
      <div className="xhs-logomark">大师的 AI 小灶</div>
      <div className="xhs-cover">
        <div className="xhs-kicker">小红书 AI 治理开放日 · 2025</div>
        <div className="xhs-cover-title">AI 狂奔时，<br />普通人需要知道的<br /><span>真相。</span></div>
        <div className="xhs-page">KEYNOTE / 01</div>
      </div>
    </XhsSlide>
  );
}

export function Xhs02About() {
  return (
    <XhsSlide layout="XHS02" footer={{ left: '关于我', page: '02 / 26' }}>
      <XhsTop eyebrow="/ 我是谁" page="02 / 26" />
      <div className="xhs-about">
        <div>
          <h1 className="xhs-title">深耕 AI 行业的<br />自媒体创作者。</h1>
          <div className="xhs-tag-row">
            <span>AI 行业 · 长期观察</span>
            <span>6 条破万赞长视频教程</span>
            <span>小红书科普创作者</span>
          </div>
        </div>
        <div className="xhs-cover-grid">
          {coverStats.map(([label, time, stat]) => (
            <div key={label}>
              <Placeholder label={`${label}\n${time}`} ratio="3/4" />
              <small>{stat}</small>
            </div>
          ))}
        </div>
      </div>
    </XhsSlide>
  );
}

export function Xhs03AntiAnxiety() {
  return (
    <BigStatement
      tone="lime"
      eyebrow="/ 我的 AI 理念"
      title={['我崇尚', 'AI 反焦虑']}
      body={['AI 的使命应该是让人的生活更好，让工作更有效。', '它诞生的初衷，不是为了让人产生焦虑。']}
      page={{ layout: 'XHS03', left: '理念', page: '03 / 26' }}
    />
  );
}

export function Xhs04Topics() {
  return (
    <XhsSlide layout="XHS04" footer={{ left: '逆潮流', page: '04 / 26' }}>
      <XhsTop eyebrow="/ 选题方向" page="04 / 26" />
      <h1 className="xhs-title">所以我会做一些<br /><span>逆潮流</span>的选题。</h1>
      <CardGrid
        columns={3}
        items={[
          { kicker: '/ 选题 01', title: '《OpenClaw 的安全风险》', body: '逆 — 对新工具的无脑吹捧或过度神化' },
          { kicker: '/ 选题 02', title: '《提示词不是越长越好》', body: '逆 — 「掌握万能模板就能通关」的速成论' },
          { kicker: '/ 选题 03', title: '《2 招教你破解 AI 生图的底层逻辑》', body: '逆 — 「AI 已经零瑕疵」的危机言论' },
        ]}
      />
      <p className="xhs-body bottom">而这些选题，恰恰好也是大家关心的。</p>
    </XhsSlide>
  );
}

export function Xhs05Powerful() {
  return (
    <XhsSlide layout="XHS05" tone="indigo" accent="cream" footer={{ left: '能力', page: '05 / 26' }}>
      <XhsTop eyebrow="/ 章节 一" page="05 / 26" />
      <h1 className="xhs-title">AI 简直<br />太强大了。</h1>
      <CardGrid
        columns={6}
        items={['以假乱真的证件照', '微信对话记录', '布满笔记的教材', '千禧年代老照片', '各类票据 · 凭证', '手写笔迹材料'].map((title, index) => ({
          kicker: `/ 0${index + 1}`,
          title,
          body: ['身份证占位', '聊天截图占位', '课本占位', '老照片占位', '票据占位', '手写占位'][index],
          tone: 'outline',
        }))}
      />
    </XhsSlide>
  );
}

export function Xhs06Github() {
  return (
    <BigStatement
      eyebrow="/ 甚至在生产端"
      title={['GitHub 上现在每天有', '20 %', '代码由 AI 提交。']}
      page={{ layout: 'XHS06', left: '能力', page: '06 / 26' }}
    />
  );
}

export function Xhs07Turn() {
  return (
    <BigStatement
      tone="cream"
      eyebrow="/ 章节 二 · 转折"
      title={['但是，AI 也没', '那么厉害。']}
      body={['事实上，现在的 AI 拥有着非常多的能力边界，', '而且几乎在短期内，都是较难解决的问题。']}
      page={{ layout: 'XHS07', left: '转折', page: '07 / 26' }}
    />
  );
}

export function Xhs08Fomo() {
  return (
    <XhsSlide layout="XHS08" footer={{ left: '对抗 FOMO', page: '08 / 26' }}>
      <XhsTop eyebrow="/ 方法" page="08 / 26" />
      <div className="xhs-split">
        <div>
          <h1 className="xhs-title">如何对抗因 AI 产生的<br />FOMO 情绪？</h1>
          <p className="xhs-answer">ANSWER → <span>了解边界。</span></p>
          <p className="xhs-body">人的焦虑来自于未知。而对抗未知最好的方式，就是了解 AI 的边界。很多东西被解构后，就没有那么神奇了。</p>
        </div>
        <CardGrid columns={2} items={boundaryCards} />
      </div>
    </XhsSlide>
  );
}

export function Xhs09BoundaryCollapse() {
  return (
    <BigStatement
      tone="indigo"
      accent="cream"
      eyebrow="/ 边界 ①"
      title={['模型', '塌陷。']}
      body="近亲繁殖的恶果 —— 当 AI 开始学习 AI 生成的内容，人类的文明多样性会迅速消失。"
      page={{ layout: 'XHS09', left: '边界 ①', page: '09 / 26' }}
    />
  );
}

export function Xhs10CollapseDetail() {
  return (
    <SplitStatement
      layout="XHS10"
      eyebrow="/ 边界 ① · 为什么会发生"
      title="模型塌陷，是怎么产生的？"
      body={['模型塌陷是指生成模型由于过度使用低质量数据，', '并对类似模型输出进行重复微调而导致性能下降。']}
      footer={{ left: '边界 ① · 机制', page: '10 / 26' }}
      side={<CollapseDiagram />}
    />
  );
}

export function Xhs11Slop() {
  return (
    <SplitStatement
      layout="XHS11"
      tone="lime"
      eyebrow="/ 边界 ① · 来源"
      title="低质量 AI 内容从哪里来？"
      body="SLOP，韦氏词典 2025 年度热词，意为「AI 泔水」。"
      footer={{ left: '边界 ① · SLOP', page: '11 / 26' }}
      side={<XhsCard title="AI 把内容生产的门槛降到了地板上。" body={['以前做动画猴子得学三年建模。', '现在跑个脚本，3 分钟出 10 条视频。']} tone="cream" />}
    />
  );
}

export function Xhs12CollapseAndMe() {
  return (
    <BigStatement
      eyebrow="/ 边界 ① · 与我有关"
      title={['模型塌陷 = 原创内容', '更加可贵。']}
      body={['模型崩塌不是远在天边的科幻故事，它已经在发生了。', '信息质量退化是渐进的，发现时可能已经晚了。']}
      page={{ layout: 'XHS12', left: '边界 ① · 与我有关', page: '12 / 26' }}
    />
  );
}

export function Xhs13OriginalValue() {
  return (
    <XhsSlide layout="XHS13" footer={{ left: '原创溢价', page: '13 / 26' }}>
      <XhsTop eyebrow="/ 推论" page="13 / 26" />
      <h1 className="xhs-title">原创内容，会越来越值钱。</h1>
      <div className="xhs-split">
        <div className="xhs-duo-media">
          <Placeholder label="普通人 AI 角色" ratio="4/3" />
          <Placeholder label="插画师 AI 角色" ratio="4/3" />
        </div>
        <XhsCard
          title="为什么插画师的 AI 角色比普通人好？"
          body={['1 能引导 AI 朝目标方向发展', '2 判断问题在哪、把 60 分改到 100 分', '3 给图足够的拓展性', '4 结合业务，知道品牌方需要什么']}
          tone="lime"
        />
      </div>
    </XhsSlide>
  );
}

export function Xhs14Agent() {
  return (
    <BigStatement
      tone="indigo"
      accent="cream"
      eyebrow="/ 边界 ②"
      title={['Agent，本质是', '提示词工程。']}
      body="OpenClaw 这一类 Agent，本质上是给 AI 预设了一大段提示词。"
      page={{ layout: 'XHS14', left: '边界 ②', page: '14 / 26' }}
    />
  );
}

export function Xhs15ContextExplosion() {
  return (
    <XhsSlide layout="XHS15" footer={{ left: '边界 ② · 上下文', page: '15 / 26' }}>
      <XhsTop eyebrow="/ 边界 ② · 现象" page="15 / 26" />
      <h1 className="xhs-title">这是它容易出现<br /><span>上下文爆炸</span>的原因。</h1>
      <div className="xhs-flow">
        <XhsCard title={'你输入\n"你好"'} body="1 token" />
        <div className="xhs-arrow">→</div>
        <XhsCard title="实际消耗" body="~ 16,000 tokens" tone="lime" />
      </div>
      <p className="xhs-body bottom">AI 持续对话不神奇，它只是把上下文一遍又一遍地喂给了自己。</p>
    </XhsSlide>
  );
}

export function Xhs16TokenProbability() {
  return (
    <BigStatement
      tone="lime"
      eyebrow="/ 边界 ③"
      title={['很多能力，不是大模型', '本身的能力。']}
      body="大模型的底层逻辑是「下一个 Token 的概率预测」。它根据语料库判断这串数字后面最大概率出现什么。"
      page={{ layout: 'XHS16', left: '边界 ③', page: '16 / 26' }}
    />
  );
}

export function Xhs17LearnedVsAbility() {
  return (
    <XhsSlide layout="XHS17" footer={{ left: '边界 ③ · 拆解', page: '17 / 26' }}>
      <XhsTop eyebrow="/ 边界 ③ · 拆解" page="17 / 26" />
      <h1 className="xhs-title">它学到的是「语言」，<br />没学到「能力」。</h1>
      <CardGrid
        columns={2}
        items={[
          { kicker: '/ 学到了 · 语言', title: '怎么表达\n怎么解释\n怎么模仿推理', tone: 'lime' },
          { kicker: '/ 没学到 · 能力', title: '真正的计算\n操作系统\n调用外部世界', tone: 'outline' },
          { kicker: '/ 封闭系统', title: '输入：文本 → 输出：文本', body: '没有外部接口，无法作用世界' },
          { kicker: '/ 概率采样', title: '不是确定计算', body: '数学会错 · 逻辑会漂 · 每次结果都不同' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs18ThreeCases() {
  return (
    <XhsSlide layout="XHS18" footer={{ left: '边界 ③ · 验证', page: '18 / 26' }}>
      <XhsTop eyebrow="/ 边界 ③ · 怎么验证" page="18 / 26" />
      <h1 className="xhs-title">三个一眼就能看出来的破绽。</h1>
      <CardGrid
        columns={3}
        items={[
          { kicker: '/ 案例 01', title: 'AI 不清楚人类有几根手指', body: '手指数不对' },
          { kicker: '/ 案例 02', title: 'AI 画不出跳了 10 米高的人', body: '物理感缺失' },
          { kicker: '/ 案例 03', title: '大象和杯子的比例问题', body: '比例失衡' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs19ExistingData() {
  return (
    <XhsSlide layout="XHS19" tone="indigo" accent="cream" footer={{ left: '边界 ④', page: '19 / 26' }}>
      <XhsTop eyebrow="/ 边界 ④" page="19 / 26" />
      <h1 className="xhs-title">它没办法生成<br />没见过的东西。</h1>
      <p className="xhs-body">AI 至今非常依赖人类供给的存量数据。</p>
      <CardGrid
        columns={2}
        tone="outline"
        items={[
          { kicker: '/ 案例 · 劳力士', title: '桌子上的劳力士', body: 'AI 默认生成的表，永远指向 10:10。' },
          { kicker: '/ 案例 · 6:02', title: '指向 6:02 的手表', body: '让它生成 6:02，时间大概率是错的。' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs20NoAnxiety() {
  return (
    <BigStatement
      eyebrow="/ 知道这些后"
      title={['我就', '不焦虑了。']}
      body={['AI 是影子，而你是光源。', '真正让你不可替代的，不是处理信息的速度，而是你对现实世界的感知力，以及对逻辑真伪的判断权。']}
      page={{ layout: 'XHS20', left: '不焦虑宣言', page: '20 / 26' }}
    />
  );
}

export function Xhs21Hallucination() {
  return (
    <XhsSlide layout="XHS21" footer={{ left: '幻觉', page: '21 / 26' }}>
      <XhsTop eyebrow="/ 章节 三 · 我看到了什么" page="21 / 26" />
      <h1 className="xhs-title">AI 幻觉，已经在出事。</h1>
      <CardGrid
        columns={3}
        items={[
          { kicker: '/ 法律领域', title: 'MyPillow 案 · 2025', body: '两名律师用 AI 准备法庭文件，含 20+ 处错误和不存在的判例。' },
          { kicker: '/ 犯罪伤害', title: 'Hjalmar Holmen 案', body: '被告知自己杀了两个儿子、判刑 21 年，只有杀人是虚构的。' },
          { kicker: '/ 医疗威胁', title: 'ECRI 2025 风险榜 #1', body: 'AI 幻觉首次被列为医院里的头号医疗科技威胁。' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs22Bias() {
  return (
    <XhsSlide layout="XHS22" footer={{ left: '偏见', page: '22 / 26' }}>
      <XhsTop eyebrow="/ 章节 三" page="22 / 26" />
      <h1 className="xhs-title">算法偏见与歧视。</h1>
      <CardGrid
        columns={3}
        items={[
          ['招聘', 'Amazon AI 系统性歧视女性候选人'],
          ['信贷', '信贷评分 AI 对少数族裔不公'],
          ['司法', '犯罪风险评估 AI 对黑人有偏见'],
          ['性别', 'Apple Card 信用额度性别争议'],
          ['医疗', '全美 2 亿人的产品存在医疗偏见'],
          ['人脸识别', '公开 8 起人脸识别错捕，其中 7 起受害人是黑人'],
        ].map(([kicker, title], index) => ({ kicker: `/ ${kicker}`, title, tone: index === 5 ? 'lime' : '' }))}
      />
    </XhsSlide>
  );
}

export function Xhs23Safety() {
  return (
    <XhsSlide layout="XHS23" tone="lime" footer={{ left: '安全风险', page: '23 / 26' }}>
      <XhsTop eyebrow="/ 章节 三" page="23 / 26" />
      <h1 className="xhs-title">AI 的安全风险，4 类典型。</h1>
      <CardGrid
        columns={4}
        items={[
          { kicker: '/ 案例 01', title: '权限过大', body: 'OpenClaw 被要求删除机密邮件，却把整个邮件客户端删了。', tone: 'cream' },
          { kicker: '/ 案例 02', title: '上下文丢失', body: '长会话中关键约束被截断，AI 无知觉地违反此前指令。', tone: 'cream' },
          { kicker: '/ 案例 03', title: '提示词注入', body: '攻击者发送构造邮件，Copilot 读取收件箱时即被劫持。', tone: 'cream' },
          { kicker: '/ 案例 04', title: '缺乏作者辨别', body: '陌生人的日历邀请不该有权指挥你的 AI。', tone: 'cream' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs24Deepfake() {
  return (
    <XhsSlide layout="XHS24" tone="indigo" accent="cream" footer={{ left: 'Deepfake', page: '24 / 26' }}>
      <XhsTop eyebrow="/ 章节 三" page="24 / 26" />
      <h1 className="xhs-title">深度伪造。<br />眼见，不为实。</h1>
      <CardGrid
        columns={2}
        tone="outline"
        items={[
          { kicker: '/ 商业诈骗 · 2024 香港', title: '视频占位 · 香港 Deepfake 案例', body: '骗子用 Deepfake 视频冒充 CFO 开会，骗走 2,500 万美元。' },
          { kicker: '/ 政治选举', title: '视频占位 · 选举虚假音视频', body: 'AI 生成的虚假音视频，干扰多国政治选举。' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs25AlreadyHappened() {
  return (
    <XhsSlide layout="XHS25" footer={{ left: '已经发生', page: '25 / 26' }}>
      <XhsTop eyebrow="/ 章节 三 · 已经发生" page="25 / 26" />
      <h1 className="xhs-title">从五角大楼，到你家长辈。</h1>
      <CardGrid
        columns={3}
        items={[
          { kicker: '/ 2023.05 · 政治地缘', title: '五角大楼「爆炸」图', body: 'AI 假图疯传，标普 500 一度盘中跳水。' },
          { kicker: '/ 2022.03 · 政治地缘', title: '泽连斯基「投降」视频', body: '伪造视频在被入侵的电视台播出。' },
          { kicker: '/ 2023.03 · 政治地缘', title: '特朗普「被捕」系列图', body: '骗过数百万网民。' },
          { kicker: '/ 离你很近 · 01', title: '「美国教授怒骂 AI」', body: '点赞数十万，但视频本身就是 AI 生成的。', tone: 'lime' },
          { kicker: '/ 离你很近 · 02', title: '「俄罗斯积雪 9 层楼高」', body: '转发破百万，最后被证实完全是 AI 伪造。', tone: 'lime' },
          { kicker: '/ 离你很近 · 03', title: 'AI「后悔视频」催婚', body: '用 AI 生成后悔没结婚视频施压，形成情感操控。', tone: 'lime' },
        ]}
      />
    </XhsSlide>
  );
}

export function Xhs26Ending() {
  return (
    <BigStatement
      tone="lime"
      eyebrow="/ 写在最后"
      title={['不焦虑，', '不神化，', '不排斥。']}
      body={['好好用 AI。', '谢谢大家。', '@大师的 AI 小灶 · 小红书 AI 治理开放日']}
      page={{ layout: 'XHS26', left: 'Fin.', page: '26 / 26' }}
    />
  );
}

function CollapseDiagram() {
  const rows = [
    ['GEN 1 · diverse', 8],
    ['GEN 5 · narrowing', 6],
    ['GEN 10 · collapsed', 3],
  ];
  return (
    <div className="xhs-collapse">
      {rows.map(([label, count]) => (
        <div key={label}>
          <div className="xhs-kicker">{label}</div>
          <div className="xhs-dots">
            {Array.from({ length: count }).map((_, index) => <span key={index} />)}
          </div>
        </div>
      ))}
    </div>
  );
}


import React from 'react';
import { Card, CardGrid, Lines, Placeholder, Split, Statement, Top, Xhs2Slide } from './primitives.jsx';

const coverStats = [
  ['视频封面 01', '6:45', '3.9w 赞', '4.9w 藏'],
  ['视频封面 02', '11:21', '1.0w 赞', '1.1w 藏'],
  ['视频封面 03', '4:38', '3.0w 赞', '3.5w 藏'],
  ['视频封面 04', '3:48', '1.5w 赞', '1.6w 藏'],
  ['视频封面 05', '2:51', '2.1w 赞', '2.7w 藏'],
  ['视频封面 06', '5:30', '3.0w 赞', '1.6w 藏'],
];

export function Xhs2_01Cover() {
  return (
    <Xhs2Slide layout="XHS2-01" footer={{ left: 'SPEAKER · @大师的AI小灶', page: '01 / 34' }}>
      <div className="xhs2-cover">
        <div className="xhs2-cover-art"><ArrowBurst /></div>
        <div className="xhs2-cover-copy">
          <div className="xhs2-top"><div className="xhs2-eyebrow yellow">AI 狂奔时</div><div className="xhs2-page">2026 / 04</div></div>
          <h1>普通人<br />需要知道的<br /><span>真相。</span></h1>
          <div className="xhs2-kicker">XHS · AI GOVERNANCE OPEN DAY 2026</div>
        </div>
      </div>
    </Xhs2Slide>
  );
}

export function Xhs2_02About() {
  return (
    <Xhs2Slide layout="XHS2-02" footer={{ left: 'INTRO', page: '02 / 34' }}>
      <Top label="§ 01 · INTRO" page="02 / 34" accent="magenta" />
      <h1 className="xhs2-title">我是谁<span>？</span></h1>
      <div className="xhs2-about-tags">
        <Card kicker="TAG / 01" title={'深耕 AI 行业的\n自媒体创作者'} tone="magenta-outline" />
        <Card kicker="TAG / 02" title={'在小红书有 6 条\n破万赞的长视频教程'} tone="cyan-outline" />
      </div>
      <div className="xhs2-cover-grid">
        {coverStats.map(([label, time, like, save]) => (
          <div key={label}>
            <Placeholder label={[label, time]} ratio="3/4" />
            <div className="xhs2-mini-stat"><span>{like}</span><span>{save}</span></div>
          </div>
        ))}
      </div>
    </Xhs2Slide>
  );
}

export function Xhs2_03Philosophy() {
  return (
    <Xhs2Slide layout="XHS2-03" footer={{ left: 'ANTI - ANXIETY', page: '03 / 34' }}>
      <div className="xhs2-half">
        <div className="xhs2-yellow-panel">
          <div className="xhs2-kicker">§ 02 · 我的 AI 理念</div>
          <h1>AI 反<br />焦虑</h1>
          <div className="xhs2-kicker">ANTI - ANXIETY</div>
        </div>
        <div className="xhs2-half-copy">
          <Top label="WHY" page="03 / 34" />
          <h2>AI 的使命，是让<br />人的生活<span>更好</span>。</h2>
          <p>它诞生的初衷不是为了让人产生焦虑。今天，我不是来给大家制造焦虑的，而是带着大家以更客观的角度去看待 AI。</p>
        </div>
      </div>
    </Xhs2Slide>
  );
}

export function Xhs2_04Topics() {
  return (
    <Xhs2Slide layout="XHS2-04" footer={{ left: 'COUNTER CURRENT', page: '04 / 34' }}>
      <Top label="§ 02 · 我的选题" page="04 / 34" accent="green" />
      <h1 className="xhs2-title">所以我会做一些<span>逆潮流</span>的选题</h1>
      <p className="xhs2-body">而这些选题，恰好也是大家关心的。</p>
      <CardGrid columns={3} items={[
        { kicker: '01', title: '《OpenClaw 的\n安全风险》', body: '对应目前对新工具的无脑吹捧或过度神化。', tone: 'green-badge' },
        { kicker: '02', title: '《提示词\n不是越长越好》', body: '对应那些宣称「掌握万能模板就能通关」的速成论。', tone: 'magenta-badge' },
        { kicker: '03', title: '《2 招破解\nAI 生图底层逻辑》', body: '对应「AI 已经零瑕疵」的危机言论。', tone: 'yellow-badge' },
      ]} />
    </Xhs2Slide>
  );
}

export function Xhs2_05Powerful() {
  return (
    <Xhs2Slide layout="XHS2-05" footer={{ left: 'SOURCE · GITHUB', page: '05 / 34' }}>
      <Top label="§ 03 · 当下" page="05 / 34" accent="red" />
      <h1 className="xhs2-title">AI 简直<span>太强大了。</span></h1>
      <p className="xhs2-body">几乎任何视觉素材，它都能以假乱真地生成出来。</p>
      <div className="xhs2-media-six">
        {['证件照', '微信对话', '课本笔记', '千禧年照', '票据 / 证明', '手写材料'].map((label) => <Placeholder key={label} label={label} />)}
      </div>
      <div className="xhs2-callout red"><strong>20%</strong><span>现在每天 GitHub 上的代码有 20% 由 AI 提交。</span></div>
    </Xhs2Slide>
  );
}

export function Xhs2_06But() {
  return <Statement layout="XHS2-06" label="— BUT —" page="06 / 34" title={['AI 也不是', '那么的厉害……']} body="事实上，现在的 AI 拥有非常多的能力边界，而且几乎在短期内，都是较难解决的问题。" accent="red" footerLeft="§ 04 · 转折" />;
}

export function Xhs2_07Boundaries() {
  return (
    <Split
      layout="XHS2-07"
      label="§ 04 · 对抗 FOMO"
      page="07 / 34"
      title={'如何对抗因 AI\n产生的 FOMO 情绪？'}
      body={'人的焦虑来自于未知，对抗未知的方法，就是了解 AI 的边界。很多东西被解构后，就没有那么神奇了。'}
      accent="cyan"
      footerLeft="BOUNDARIES"
      side={<CardGrid columns={1} items={['模型塌陷', 'Agent 的本质', 'AI 能力是缝合来的', '依赖存量数据'].map((title, i) => ({ kicker: `边界 ${i + 1}`, title, tone: ['magenta-badge', 'blue-badge', 'yellow-badge', 'green-badge'][i] }))} />}
    />
  );
}

export function Xhs2_08BoundaryOne() {
  return (
    <Split
      layout="XHS2-08"
      label="边界 ①"
      page="08 / 34"
      title={'模型塌陷 ——\n近亲繁殖的恶果'}
      body="当 AI 开始学习 AI 生成的内容，人类的文明多样性会迅速消失。"
      accent="magenta"
      footerLeft="MODEL COLLAPSE"
      side={<Card title="情怀点" body="作为创作者，我们要通过逻辑重构来对抗这种平庸化。" tone="magenta-outline" />}
    />
  );
}

export function Xhs2_09WhyCollapse() {
  return (
    <Split
      layout="XHS2-09"
      label="边界 ① · 成因"
      page="09 / 34"
      title="为什么会产生模型塌陷？"
      body={'模型坍塌是指生成模型由于过度使用低质量数据，或对类似模型的输出进行重复微调，而导致性能下降的现象。'}
      accent="magenta"
      footerLeft="MODEL COLLAPSE"
      side={<Placeholder label={['一堆人脸的照片', '塌陷后高度同质化']} ratio="4/3" />}
    />
  );
}

export function Xhs2_10Slop() {
  return (
    <Split
      layout="XHS2-10"
      label="边界 ① · 低质来源"
      page="10 / 34"
      title={'低质量 AI 内容\n从哪里来？'}
      body={'Slop，韦氏词典 2025 年度热词，意为「AI 泔水」。AI 把内容生产门槛降到了地板上。'}
      accent="magenta"
      footerLeft="SLOP"
      side={<div className="xhs2-mini-grid">{[1, 2, 3, 4].map((n) => <Placeholder key={n} label={`低质 AI 视频 · 0${n}`} ratio="1/1" />)}</div>}
    />
  );
}

export function Xhs2_11WhyItMatters() {
  return <Statement layout="XHS2-11" label="边界 ① · 与你何关" page="11 / 34" title={['模型塌陷', '和我有什么关系？']} body={['模型塌陷 = 原创内容更可贵。', '信息质量的退化是渐进的，你可能不知不觉就习惯了。']} accent="magenta" footerLeft="ORIGINAL VALUE" />;
}

export function Xhs2_12Originals() {
  return (
    <Xhs2Slide layout="XHS2-12" accent="yellow" footer={{ left: 'ORIGINAL VALUE', page: '12 / 34' }}>
      <Top label="边界 ① · 原创价值" page="12 / 34" accent="yellow" />
      <h1 className="xhs2-title">原创内容，<span>会越来越值钱。</span></h1>
      <div className="xhs2-split">
        <div className="xhs2-mini-grid">
          <Placeholder label={['普通人用 AI 生成的角色', 'A · 普通人']} />
          <Placeholder label={['插画师用 AI 生成的角色', 'B · 插画师']} />
        </div>
        <Card title="为什么插画师生成的更好？" body={['01. 能引导 AI 朝目标方向。', '02. 能把 60 分改到 100 分。', '03. 能给图足够拓展性。', '04. 能结合业务做判断。']} tone="yellow-badge" />
      </div>
    </Xhs2Slide>
  );
}

export function Xhs2_13IpVoice() {
  return (
    <Split
      layout="XHS2-13"
      label="边界 ① · IP 与品味"
      page="13 / 34"
      title={'原创内容，\n会越来越值钱。'}
      body={'因为 AI 内容泛滥，有自己独特文风和解读角度的 IP，才是真正能够在平台中存活下来的 IP。'}
      accent="yellow"
      footerLeft="IP / TASTE"
      side={<div className="xhs2-mini-grid"><Placeholder label="卡兹克的图片 · 1" ratio="1/1" /><Placeholder label="卡兹克的图片 · 12" ratio="1/1" /></div>}
    />
  );
}

export function Xhs2_14Agent() {
  return (
    <Split
      layout="XHS2-14"
      label="边界 ②"
      page="14 / 34"
      title={'目前流行的 Agent，\n大部分是提示词工程'}
      body={'OpenClaw 本质上给 AI 预设了一大段提示词。这也是它容易出现「上下文爆炸」的原因。'}
      accent="blue"
      footerLeft="PROMPT ENGINEERING"
      side={<Card title={'USER INPUT\n"你好"'} body={'1 token → 实际消耗 ~16,000 tokens'} tone="blue-badge" />}
    />
  );
}

export function Xhs2_15PersistentDialogue() {
  return (
    <Split
      layout="XHS2-15"
      label="边界 ② · 持续对话"
      page="15 / 34"
      title={'大模型能持续跟你对话\n这件事，甚至还有些笨。'}
      body={'AI 持续对话不神奇，它只是将上下文一遍又一遍喂给自己而已。'}
      accent="blue"
      footerLeft="CONTEXT"
      side={<Card title="TURN N → TURN N+1" body="每次对话都是把过去的全部聊天记录，重新塞回模型输入里。" tone="blue-badge" />}
    />
  );
}

export function Xhs2_16Tokens() {
  return (
    <Split
      layout="XHS2-16"
      label="边界 ③"
      page="16 / 34"
      title={'AI 的能力，\n不是大模型本身的能力'}
      body={'GPT-4 训练目标只有一个：根据上下文，预测下一个 token。'}
      accent="yellow"
      footerLeft="NEXT TOKEN"
      side={<CardGrid columns={2} items={[{ kicker: '学到了 · 语言', title: '表达 / 解释 / 模仿推理', tone: 'yellow-badge' }, { kicker: '没学到 · 能力', title: '真正计算 / 操作系统 / 调用外部世界' }]} />}
    />
  );
}

export function Xhs2_17ClosedSystem() {
  return (
    <Split
      layout="XHS2-17"
      label="边界 ③ · 封闭系统"
      page="17 / 34"
      title={'原生大模型是一个\n"封闭系统"'}
      body="没有外部接口，无法作用于现实世界。"
      accent="yellow"
      footerLeft="CLOSED SYSTEM"
      side={<Card title="INPUT 文本 → LLM → OUTPUT 文本" body={'它不能：访问互联网 / 操作软件 / 调用 API'} tone="yellow-badge" />}
    />
  );
}

export function Xhs2_18Probabilistic() {
  return (
    <Xhs2Slide layout="XHS2-18" accent="yellow" footer={{ left: 'PROBABILISTIC', page: '18 / 34' }}>
      <Top label="边界 ③ · 概率系统" page="18 / 34" accent="yellow" />
      <h1 className="xhs2-title">大模型输出是<span>概率采样</span></h1>
      <CardGrid columns={3} items={[{ kicker: '✗ 数学会错', title: '没有确定计算路径' }, { kicker: '✗ 逻辑会漂', title: '没有严格的逻辑执行' }, { kicker: '✗ 结果会变', title: '每次结果可能不同' }]} />
      <p className="xhs2-body">它不会通过数学公式来计算，而是根据人类语料库判断最大概率出现的数字是什么。</p>
    </Xhs2Slide>
  );
}

export function Xhs2_19VerifyCases() {
  return (
    <Xhs2Slide layout="XHS2-19" accent="yellow" footer={{ left: 'VERIFY', page: '19 / 34' }}>
      <Top label="边界 ③ · 验证" page="19 / 34" accent="yellow" />
      <h1 className="xhs2-title">如何验证这件事？<br />三个简单反例就够了。</h1>
      <CardGrid columns={3} items={[
        { kicker: '01', title: 'AI 不清楚人类有几根手指', body: '仍偶尔画出 6 根手指。' },
        { kicker: '02', title: 'AI 画不出跳了 10 米高的人', body: '无法合理推断物理。' },
        { kicker: '03', title: '大象和杯子的比例问题', body: '不会真正理解空间比例。' },
      ]} />
    </Xhs2Slide>
  );
}

export function Xhs2_20StockData() {
  return (
    <Xhs2Slide layout="XHS2-20" accent="green" footer={{ left: 'STOCK DATA', page: '20 / 34' }}>
      <Top label="边界 ④" page="20 / 34" accent="green" />
      <h1 className="xhs2-title">AI 非常依赖<br />人类供给的数据。</h1>
      <p className="xhs2-body">它没办法生成没见过的东西。</p>
      <CardGrid columns={2} items={[{ kicker: '劳力士 · 桌上', title: '永远指向 10:10', body: 'AI 默认生成的表常指向 10:10。' }, { kicker: '手表 · 6:02', title: '指向 6:02 的手表', body: '让它生成 6:02，时间大概率是错的。' }]} />
    </Xhs2Slide>
  );
}

export function Xhs2_21Stitched() {
  return <Statement layout="XHS2-21" label="边界 ④ · 嫁接" page="21 / 34" title={['AI 不是万能的。', '它是嫁接到一个个技术上的。']} body={['一个记忆力好的 AI，不是因为真的被优化成记忆好。', '它只是能记住更多东西，或把上下文压缩后再喂给自己。']} accent="green" footerLeft="STITCHED TOGETHER" />;
}

export function Xhs2_22ShadowLight() {
  return <Statement layout="XHS2-22" label="§ 05 · 总结" page="22 / 34" title={['AI 是「影子」，', '而你是「光源」。']} body={['AI 并不理解世界，它只是在模仿人类理解世界的方式。', '真正让你不可替代的，是感知力和判断权。']} accent="yellow" footerLeft="SHADOW / LIGHT" />;
}

export function Xhs2_23Hallucination() {
  return (
    <RiskGrid layout="XHS2-23" label="§ 06 · 我看到的风险" page="23 / 34" title="我看到了什么：AI 幻觉" accent="red" footerLeft="HALLUCINATION" items={[
      ['⚖ 法律领域', 'MyPillow 案 2025', 'AI 准备法庭文件，含 20 多处错误和不存在的判例。'],
      ['! 犯罪伤害', 'Holmen 案', '男子被 ChatGPT 虚构成杀害两个儿子的罪犯。'],
      ['+ 医疗威胁', 'ECRI #1 风险', 'AI 凭空编出症状、药名、剂量。'],
    ]} />
  );
}

export function Xhs2_24Bias() {
  return (
    <RiskGrid layout="XHS2-24" label="§ 06 · 算法偏见" page="24 / 34" title="AI 的算法偏见与歧视" accent="red" footerLeft="BIAS" columns={3} items={[
      ['01', '招聘歧视', '亚马逊招聘 AI 系统性歧视女性候选人。'],
      ['02', '信贷不公', '信贷评分 AI 对少数族裔不公。'],
      ['03', '司法偏见', '犯罪风险评估 AI 对黑人有偏见。'],
      ['04', '性别差异', 'Apple Card 信用额度性别争议。'],
      ['05', '医疗偏见', '影响全美 2 亿人的医疗 AI 产品存在偏见。'],
      ['06', '人脸识别', '错捕案例中受害人大多是黑人。'],
    ]} />
  );
}

export function Xhs2_25Security() {
  return (
    <RiskGrid layout="XHS2-25" label="§ 06 · 安全风险" page="25 / 34" title="AI 的安全风险" accent="red" footerLeft="SECURITY" columns={4} items={[
      ['CASE 01', '权限过大风险', 'OpenClaw 删除了自己的邮件客户端。'],
      ['CASE 02', '上下文丢失风险', '长会话中关键约束可能被截断。'],
      ['CASE 03', '提示词注入风险', 'Copilot 读取收件箱时可能被指令劫持。'],
      ['CASE 04', '作者辨别机制', '陌生日历邀请不该指挥 AI 读邮箱。'],
    ]} />
  );
}

export function Xhs2_26Deepfake() {
  return (
    <RiskGrid layout="XHS2-26" label="§ 06 · 深度伪造" page="26 / 34" title="深度伪造 —— 眼见不为实。" accent="red" footerLeft="DEEPFAKE" columns={2} items={[
      ['01 商业诈骗', '香港 Deepfake 诈骗案', '冒充 CFO 开视频会议，骗走 2,500 万美元。'],
      ['02 政治选举', '政治选举 AI 虚假音视频', '干扰政治选举，操纵公共舆论。'],
    ]} />
  );
}

export function Xhs2_27Geopolitical() {
  return (
    <RiskGrid layout="XHS2-27" label="§ 06 · 政治地缘风险" page="27 / 34" title="政治地缘型风险" accent="red" footerLeft="GEOPOLITICAL" columns={3} items={[
      ['2023 / 05', '五角大楼「爆炸」假图', '标普 500 一度盘中跳水。'],
      ['2022 / 03', '泽连斯基「投降」视频', '伪造视频投放在被黑电视台。'],
      ['2023 / 03', '特朗普「被捕」系列', '骗过数百万网民。'],
    ]} />
  );
}

export function Xhs2_28Closer() {
  return (
    <RiskGrid layout="XHS2-28" label="§ 06 · 在身边的 AI" page="28 / 34" title="如果你觉得这些事很远，我说几个近的。" accent="red" footerLeft="CLOSER" columns={3} items={[
      ['01 情绪操控', '美国教授怒骂 AI', '视频本身就是 AI 生成的。'],
      ['02 伪造现场', '俄罗斯积雪 9 层楼高', '最后被证实完全是 AI 伪造。'],
      ['03 家庭施压', 'AI「后悔视频」催婚', '用 AI 视频向单身子女施压。'],
    ]} />
  );
}

export function Xhs2_29PlatformLabels() {
  return (
    <Split
      layout="XHS2-29"
      label="§ 07 · 平台为何区分"
      page="29 / 34"
      title={'为什么平台要极力区分\n实拍作品和 AI 作品？'}
      body="因为存在产生舆论风暴的风险。即使视频下面有 AI 生成标识，很多人也未必认识。"
      accent="cyan"
      footerLeft="PLATFORM LABELS"
      side={<div className="xhs2-mini-grid"><Placeholder label="伪造证件照" /><Placeholder label="橘猫救婴" /></div>}
    />
  );
}

export function Xhs2_30ImageV2() {
  return (
    <RiskGrid layout="XHS2-30" label="§ 07 · Deepfake 能力清单" page="30 / 34" title="Image v2 的 Deepfake 能力" accent="cyan" footerLeft="IMAGE V2" columns={3} items={[
      ['01', '伪造证件照', '身份证明材料'],
      ['02', '伪造现场目击图', '纪实场景'],
      ['03', '伪造职场身份材料', '工牌 / 简历'],
      ['04', '伪造名人代言', '商业背书'],
      ['05', '伪造合影', '关系证明'],
      ['06', '伪造新闻配图', '新闻 / 纪实图'],
    ]} />
  );
}

export function Xhs2_31Governance() {
  return (
    <Xhs2Slide layout="XHS2-31" accent="cyan" footer={{ left: 'GOVERNANCE', page: '31 / 34' }}>
      <Top label="§ 08 · 平台治理" page="31 / 34" accent="cyan" />
      <h1 className="xhs2-title">平台治理的<span>必要性</span></h1>
      <p className="xhs2-body">AI 跑得很快，但规则还在系鞋带。</p>
      <div className="xhs2-vs">
        <Card kicker="SPEED · A" title="AI 能力迭代" body="以「天」为单位在进化。" tone="cyan-outline" />
        <strong>VS</strong>
        <Card kicker="SPEED · B" title="规则 / 法律 / 大众认知" body="以「月 / 季度」为单位跟进。" tone="yellow-badge" />
      </div>
    </Xhs2Slide>
  );
}

export function Xhs2_32TimeGap() {
  return (
    <RiskGrid layout="XHS2-32" label="§ 08 · 时间差" page="32 / 34" title="这个时间差意味着什么？" accent="cyan" footerLeft="TIME GAP" columns={3} items={[
      ['01', '普通人会先暴露在风险中。', '风险发生在理解和规则之前。'],
      ['02', '平台和相关单位需要前置思考。', '不能等问题发生再补救。'],
      ['03', '这就是 AI 治理重要的原因。', '这是平台、创作者、技术专家、用户共同努力的长跑。'],
    ]} />
  );
}

export function Xhs2_33OfficialSupplement() {
  return (
    <Split
      layout="XHS2-33"
      label="§ 08 · 官方补充"
      page="33 / 34"
      title={'作为科普作者，\n我如何看待平台治理？'}
      accent="cyan"
      footerLeft="OFFICIAL SUPPLEMENT"
      side={<CardGrid columns={1} items={[{ kicker: '01', title: '没有规则的内容生态，劣币会驱逐良币。', body: '劣质和虚假内容会驱逐优质内容。', tone: 'cyan-outline' }, { kicker: '02', title: '平台主动管理，是对认真创作用户的保护。', body: '明确鼓励什么、反对什么。', tone: 'yellow-badge' }]} />}
    />
  );
}

export function Xhs2_34ThankYou() {
  return (
    <Xhs2Slide layout="XHS2-34" accent="yellow" footer={{ left: 'SPEAKER · @大师的AI小灶', page: '34 / 34' }}>
      <Top label="§ 09 · 结尾" page="34 / 34" accent="yellow" />
      <div className="xhs2-thanks">
        <div className="xhs2-kicker">CLOSING THOUGHTS · 三不原则</div>
        <h1>不焦虑、<br />不神化、<br />不排斥。</h1>
        <p>—— 好好用 AI。</p>
        <strong>谢谢<br />大家</strong>
      </div>
    </Xhs2Slide>
  );
}

function RiskGrid({ layout, label, page, title, accent = 'red', footerLeft, columns = 3, items }) {
  return (
    <Xhs2Slide layout={layout} accent={accent} footer={{ left: footerLeft, page }}>
      <Top label={label} page={page} accent={accent} />
      <h1 className="xhs2-title compact"><Lines lines={title} /></h1>
      <CardGrid columns={columns} items={items.map(([kicker, itemTitle, body]) => ({ kicker, title: itemTitle, body }))} />
    </Xhs2Slide>
  );
}

function ArrowBurst() {
  return (
    <div className="xhs2-arrow-burst">
      <span className="magenta" /><span className="cyan" /><span className="green" /><span className="red" />
    </div>
  );
}

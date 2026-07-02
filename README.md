<div align="center">

[![Stars](https://img.shields.io/github/stars/gitstq/blueeagle-openai-api?style=flat-square&logo=github&color=gold)](https://github.com/gitstq/blueeagle-openai-api)
[![Price](https://img.shields.io/badge/Price-0.09x%20Official-brightgreen?style=flat-square)](https://ahg.codes)
[![Ratio](https://img.shields.io/badge/Recharge-1:1%20(RMB:USD)-blue?style=flat-square)](https://ahg.codes)
[![Native](https://img.shields.io/badge/Pool-100%25%20Official%20Native-red?style=flat-square)](https://ahg.codes)
[![OpenAI Compatible](https://img.shields.io/badge/OpenAI-Compatible-412991?style=flat-square&logo=openai)](https://ahg.codes)

# 🦅 蓝鹰AI网关 | BlueEagle AI Gateway

### 9%官方价格，100%原生体验
#### 9% Official Price, 100% Native Experience

**全球顶尖大模型统一API网关，一站式接入所有主流AI模型**
<br>*Global Top AI Models Unified API Gateway — Access All Leading AI Models in One Place*

[🌐 官方网站](https://ahg.codes) · [💰 立即充值](https://ahg.codes) · [🚀 免费测试](https://ahg.codes)

</div>

---

## 📖 简介 | Introduction

蓝鹰AI网关（BlueEagle AI Gateway）是面向开发者和企业的高性能AI大模型统一接入平台。我们提供**100%原生官方号池**，无任何掺假、共享或二次中转，以**官方定价的9%**为您提供与官方完全一致的使用体验。

通过蓝鹰AI网关，您只需修改一行代码（`base_url`），即可零成本迁移现有OpenAI项目，瞬间解锁 GPT、Claude、Gemini 等全球顶尖大模型能力。

> 💡 **核心数据**：充值比例 **1:1**（1元人民币 = 1美元官方额度），消耗倍率仅 **0.09x**，这意味着您的AI成本直接降低 **91%**。

---

## ✨ 核心优势 | Key Advantages

| 优势 | 说明 | 对您的价值 |
|------|------|-----------|
| 🏆 **原生官方号池** | 100%官方账号，无掺假、无共享、无二次中转 | 安全合规，稳定可靠，永不掉线 |
| 💰 **极致性价比** | 0.09x消耗倍率 + 1:1充值比例 | 成本仅为官方的 **9%**，节省 **91%** |
| ⚡ **智能负载均衡** | 多账号毫秒级自动故障切换 | 99.9%+可用性，告别单点故障 |
| 🔄 **零代码迁移** | 完全兼容OpenAI接口规范 | 修改`base_url`即可运行，1分钟完成迁移 |
| 🎁 **免费测试** | 注册即送测试额度 | 零门槛体验，满意再充值 |
| ⏳ **永久有效** | 额度不清零、不过期 | 随充随用，灵活掌控预算 |

### 成本对比示例 | Cost Example

假设您每月消耗 **$100** 官方额度：

| 渠道 | 实际支出 | 节省比例 |
|------|---------|---------|
| 官方直充 | ¥730+（按汇率） | — |
| 其他中转站 | ¥200~400 | 约50%~70% |
| **蓝鹰AI网关** | **¥9** | **98.8%** |

> 🎯 蓝鹰AI网关让您的每一分投入都产生 **11倍** 的官方额度价值。

---

## 📋 支持模型 | Supported Models

| 厂商 | 模型系列 | 状态 | 备注 |
|------|---------|------|------|
| **OpenAI** | GPT-4o / GPT-4o-mini / GPT-4 / GPT-3.5-Turbo / o1 / o3-mini 等全系列 | ✅ 已支持 | 全功能，含流式输出、Function Calling |
| **Anthropic** | Claude 3.5 Sonnet / Claude 3 Opus / Claude 3 Haiku 等全系列 | ✅ 已支持 | 含多模态、Extended Thinking |
| **Google** | Gemini 1.5 Pro / Gemini 1.5 Flash / Gemini Ultra 等全系列 | ✅ 已支持 | 原生多模态，超长上下文 |
| **Antigravity** | 全系列模型 | ✅ 已支持 | — |
| **DeepSeek** | DeepSeek-V3 / DeepSeek-R1 / DeepSeek-Coder | 🚧 即将上线 | 敬请期待 |
| **通义千问** | Qwen-Max / Qwen-Plus / Qwen-Turbo 等 | 🚧 即将上线 | 敬请期待 |
| **Meta** | Llama 3 / Llama 3.1 / Llama 3.2 全系列 | 🚧 即将上线 | 敬请期待 |

> 📢 模型库持续更新中，新模型通常在官方发布后 **24小时内** 接入。

---

## 🚀 快速开始 | Quick Start

### 1. 获取API密钥

访问 [https://ahg.codes](https://ahg.codes) 注册账号，进入控制台获取您的 API Key。

### 2. 修改 Base URL

将您现有代码中的 `https://api.openai.com/v1` 替换为：

```
https://ahg.codes/v1
```

### 3. 运行代码

以下示例均使用 `gpt-4o` 模型，您可自由替换为 Claude、Gemini 等任意已支持模型。

---

#### cURL 示例

```bash
curl https://ahg.codes/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_API_KEY" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "Hello, BlueEagle!"}
    ]
  }'
```

#### Python 示例

```python
from openai import OpenAI

# 初始化客户端 —— 只需修改 base_url
client = OpenAI(
    api_key="YOUR_API_KEY",
    base_url="https://ahg.codes/v1"
)

# 发送请求 —— 与官方完全一致
response = client.chat.completions.create(
    model="gpt-4o",
    messages=[
        {"role": "system", "content": "You are a helpful assistant."},
        {"role": "user", "content": "Hello, BlueEagle!"}
    ]
)

print(response.choices[0].message.content)
```

#### Node.js 示例

```javascript
import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: 'YOUR_API_KEY',
  baseUrl: 'https://ahg.codes/v1',
});

async function main() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: 'Hello, BlueEagle!' },
    ],
  });

  console.log(response.choices[0].message.content);
}

main();
```

---

## 💰 充值与计费 | Pricing

### 充值规则

| 项目 | 说明 |
|------|------|
| **充值比例** | **1:1** — 充值1元人民币 = 获得1美元官方等值额度 |
| **消耗倍率** | **0.09x** — 实际扣费仅为官方定价的9% |
| **计费方式** | 按量计费，用多少扣多少 |
| **额度有效期** | **永久有效**，不清零、不过期 |
| **最低充值** | 无门槛，支持任意金额 |

### 计费示例

| 模型 | 官方定价（输入/输出） | 蓝鹰实际扣费 |
|------|---------------------|-------------|
| GPT-4o | $5.00 / $15.00 per 1M tokens | ¥0.45 / ¥1.35 per 1M tokens |
| GPT-4o-mini | $0.15 / $0.60 per 1M tokens | ¥0.0135 / ¥0.054 per 1M tokens |
| Claude 3.5 Sonnet | $3.00 / $15.00 per 1M tokens | ¥0.27 / ¥1.35 per 1M tokens |
| Gemini 1.5 Pro | $3.50 / $10.50 per 1M tokens | ¥0.315 / ¥0.945 per 1M tokens |

> 💡 以上价格已按 0.09x 倍率换算为人民币。由于充值比例为 1:1，您看到的扣费金额即为实际人民币支出。

---

## ⚔️ 竞品对比 | Comparison

| 特性 | 蓝鹰AI网关 | 其他中转站A | 其他中转站B | 官方直充 |
|------|-----------|------------|------------|---------|
| **价格倍率** | **0.09x** | 0.3x~0.5x | 0.2x~0.4x | 1.0x |
| **充值比例** | **1:1（RMB:USD）** | 1:0.7~0.9 | 1:0.8~1.0 | 按汇率 |
| **号池来源** | **100%原生官方** | 混合/共享 | 混合/共享 | 100%官方 |
| **负载均衡** | ✅ 智能多账号 | ❌ 单账号 | ⚠️ 简单轮询 | — |
| **故障切换** | ✅ 毫秒级自动 | ❌ 手动处理 | ⚠️ 分钟级 | — |
| **免费测试** | ✅ 注册即送 | ⚠️ 有限额度 | ❌ 无 | ⚠️ 有限试用 |
| **额度有效期** | **永久** | 通常1年 | 通常6个月 | 按月订阅 |
| **OpenAI兼容** | ✅ 100% | ✅ 部分 | ✅ 部分 | — |

> 🏆 **结论**：蓝鹰AI网关在价格、稳定性、透明度三个维度全面领先，是企业级AI接入的最优选择。

---

## 📞 联系与支持 | Support

| 渠道 | 链接/方式 |
|------|----------|
| 🌐 **官方网站** | [https://ahg.codes](https://ahg.codes) |
| 💬 **在线客服** | 官网右下角实时聊天 |
| 📧 **商务合作** | 请通过官网联系表单提交 |
| 🐛 **问题反馈** | [GitHub Issues](https://github.com/BlueEagle-AI-Gateway/BlueEagle-AI-Gateway/issues) |

---

## ⚠️ 免责声明 | Disclaimer

1. 蓝鹰AI网关仅作为AI模型API的转发与聚合服务平台，不提供模型本身的所有权与训练服务。
2. 用户在使用本服务时，需遵守各模型厂商（OpenAI、Anthropic、Google等）的使用条款与政策。
3. 禁止将本服务用于任何违法违规、侵犯他人权益或产生有害内容的用途。
4. 服务价格与可用模型可能随官方政策调整而变化，请以官网实时信息为准。
5. 本仓库仅用于项目宣传与技术文档展示，最终服务条款以 [ahg.codes](https://ahg.codes) 官网公示为准。

---

<div align="center">

**Made with ❤️ by BlueEagle Team**

[⬆ 返回顶部](#--蓝鹰ai网关--blueeagle-ai-gateway)

</div>

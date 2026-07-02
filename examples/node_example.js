/**
 * 蓝鹰AI网关 - Node.js 调用示例
 * BlueEagle AI Gateway - Node.js Usage Example
 *
 * 安装依赖:
 *     npm install openai
 */

import OpenAI from 'openai';

// ==========================================
// 配置区 - 替换为您的实际API密钥
// ==========================================
const API_KEY = 'YOUR_API_KEY';
const BASE_URL = 'https://ahg.codes/v1';

const client = new OpenAI({
  apiKey: API_KEY,
  baseURL: BASE_URL,
});

/**
 * 基础对话示例
 */
async function chatCompletion() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'system', content: 'You are a helpful assistant.' },
      { role: 'user', content: '请用一句话介绍蓝鹰AI网关的优势。' },
    ],
  });

  console.log('=== 基础对话 ===');
  console.log(response.choices[0].message.content);
  console.log();
}

/**
 * 流式输出示例
 */
async function streamChat() {
  const response = await client.chat.completions.create({
    model: 'gpt-4o',
    messages: [
      { role: 'user', content: '请写一个JavaScript防抖函数。' },
    ],
    stream: true,
  });

  console.log('=== 流式输出 ===');
  for await (const chunk of response) {
    if (chunk.choices[0]?.delta?.content) {
      process.stdout.write(chunk.choices[0].delta.content);
    }
  }
  console.log('\n');
}

/**
 * 切换不同厂商模型示例
 */
async function multiModelSwitch() {
  const models = [
    ['gpt-4o', 'OpenAI'],
    ['claude-3-5-sonnet-20241022', 'Anthropic'],
    ['gemini-1.5-pro', 'Google'],
  ];

  for (const [model, vendor] of models) {
    const response = await client.chat.completions.create({
      model,
      messages: [{ role: 'user', content: 'Hi' }],
    });

    console.log(`=== ${vendor} (${model}) ===`);
    console.log(response.choices[0].message.content);
    console.log();
  }
}

// 运行示例
(async () => {
  try {
    await chatCompletion();
    await streamChat();
    // await multiModelSwitch(); // 取消注释以测试多模型切换
  } catch (error) {
    console.error('Error:', error.message);
  }
})();

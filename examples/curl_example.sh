#!/bin/bash
# 蓝鹰AI网关 - cURL 调用示例
# BlueEagle AI Gateway - cURL Usage Example

# ==========================================
# 配置区 - 替换为您的实际API密钥
# ==========================================
API_KEY="YOUR_API_KEY"
BASE_URL="https://ahg.codes/v1"

# 基础对话请求
echo "=== 基础对话 ==="
curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "system", "content": "You are a helpful assistant."},
      {"role": "user", "content": "请用一句话介绍蓝鹰AI网关的优势。"}
    ]
  }' | jq -r '.choices[0].message.content'

echo ""
echo "=== 流式输出 ==="
curl -s "${BASE_URL}/chat/completions" \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer ${API_KEY}" \
  -d '{
    "model": "gpt-4o",
    "messages": [
      {"role": "user", "content": "Hello, BlueEagle!"}
    ],
    "stream": true
  }'

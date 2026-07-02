"""
蓝鹰AI网关 - Python 调用示例
BlueEagle AI Gateway - Python Usage Example

安装依赖:
    pip install openai
"""

from openai import OpenAI

# ==========================================
# 配置区 - 替换为您的实际API密钥
# ==========================================
API_KEY = "YOUR_API_KEY"
BASE_URL = "https://ahg.codes/v1"

# 初始化客户端
client = OpenAI(
    api_key=API_KEY,
    base_url=BASE_URL
)


def chat_completion():
    """基础对话示例"""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": "请用一句话介绍蓝鹰AI网关的优势。"}
        ]
    )
    print("=== 基础对话 ===")
    print(response.choices[0].message.content)
    print()


def stream_chat():
    """流式输出示例"""
    response = client.chat.completions.create(
        model="gpt-4o",
        messages=[
            {"role": "user", "content": "请写一个Python快速排序算法。"}
        ],
        stream=True
    )
    print("=== 流式输出 ===")
    for chunk in response:
        if chunk.choices[0].delta.content:
            print(chunk.choices[0].delta.content, end="")
    print("\n")


def multi_model_switch():
    """切换不同厂商模型示例"""
    models = [
        ("gpt-4o", "OpenAI"),
        ("claude-3-5-sonnet-20241022", "Anthropic"),
        ("gemini-1.5-pro", "Google"),
    ]

    for model, vendor in models:
        response = client.chat.completions.create(
            model=model,
            messages=[
                {"role": "user", "content": "Hi"}
            ]
        )
        print(f"=== {vendor} ({model}) ===")
        print(response.choices[0].message.content)
        print()


if __name__ == "__main__":
    chat_completion()
    stream_chat()
    # multi_model_switch()  # 取消注释以测试多模型切换

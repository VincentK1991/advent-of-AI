# Specification: Goose-Powered GitHub Action for Winter Festival Issue Triage

## Overview
This GitHub Action uses **goose** (an AI agent) to automatically process new issues related to "Winter Festivals". The AI will analyze the content, categorize the severity, apply relevant labels, and provide triage feedback.

## GitHub Action Trigger
- **Event**: `issues`
- **Activity types**: `opened`

## Environment & Secrets
The following secrets must be configured in the GitHub Repository:
- `GEMINI_API_KEY`: The API key for Google Gemini.
- `GH_TOKEN`: GitHub token for the MCP extension to interact with issues (labelling, commenting).

## Configuration
- **AI Agent**: [goose](https://github.com/block/goose)
- **LLM Provider**: Gemini
- **Model**: `gemini-1.5-flash` (Optimized for speed and efficiency)
- **Extension**: `github` MCP extension

## Issue Categorization Logic
Users submit issues about **Winter Festivals** (e.g., lighting ceremonies, holiday markets, safety concerns). The goose AI will categorize them into two main buckets:

1.  **Urgent**: 
    - Safety hazards (ice, crowd control).
    - Event cancellations or major delays.
    - Security issues.
2.  **Wait**:
    - General inquiries about dates/times.
    - Suggestions for future festivals.
    - Minor feedback or praise.

## Workflow Steps

### 1. Issue Analysis
Upon trigger, the action will:
- Read the issue title and body.
- Use goose to call the `github` MCP tool to fetch any additional context if needed.

### 2. Categorization & Labeling
Goose will determine the category based on the logic above and apply labels:
- `urgent`: If safety/cancellation related.
- `low-priority`: If general feedback/inquiry.
- `winter-festival`: All issues triggered by this flow.

### 3. Triage Feedback
Goose will post a comment on the issue:
- **For Urgent**: "Thank you for reporting this safety/critical issue. Our team has been notified and will address this immediately."
- **For Wait**: "Thank you for your feedback/inquiry regarding the Winter Festival! We have triaged this and will get back to you soon."

## Example Goose Prompt
> "You are a Winter Festival Triage Assistant. Analyze the following issue: Title: {title}, Body: {body}. 
> 1. Determine if it is Urgent (Safety, Security, Cancellation) or if it can Wait (General Info, Suggestions). 
> 2. Use the github extension to add the label 'urgent' or 'low-priority'.
> 3. Add the label 'winter-festival'.
> 4. Post a response comment acknowledging the severity."

## Implementation Detail (YAML Snippet)
```yaml
name: Goose Issue Triage
on:
  issues:
    types: [opened]

jobs:
  triage:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Goose
        run: |
          # Install goose and configure gemini
          curl -fsSL https://github.com/block/goose/releases/latest/download/goose-linux-amd64 -o goose
          chmod +x goose
          ./goose configure set provider gemini
          ./goose configure set model gemini-1.5-flash

      - name: Run Goose Triage
        env:
          GEMINI_API_KEY: ${{ secrets.GEMINI_API_KEY }}
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
        run: |
          ./goose run "Analyze issue #${{ github.event.issue.number }} in ${{ github.repository }}. Categorize as urgent or wait, apply labels, and comment."
```

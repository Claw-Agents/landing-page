# Safety Gate - Promotion Guide

This guide is for promoting **Safety Gate** without over-claiming what it is.

## Core positioning

Use language like:

- approval-aware MCP security middleware
- policy and review layer for local AI agents
- auditability for shell and file tool execution
- the middle ground between blind trust and full sandboxing

Avoid language like:

- full sandbox
- universal AI safety platform
- enterprise governance suite
- complete secure agent runtime

## Good one-line description

**Safety Gate adds policy, approvals, and auditability to MCP tool execution for local AI agents.**

## Suggested audiences

Best early audience:

- OpenClaw / MCP users
- security-conscious builders
- developers using local AI agents with shell/file tools
- teams who want reviewable agent execution

## Message themes that should work

### Theme 1: The middle layer
Most agent setups force you to choose between:
- too much trust
- too much restriction
- too much infrastructure

Safety Gate is the middle layer.

### Theme 2: Reviewable execution
If an agent can run shell commands or edit files, you should be able to answer:
- who approved this?
- who executed it?
- what changed?
- can the approval be replayed?

### Theme 3: Local-first control
Safety Gate is useful when you want agents to stay productive without turning risky local tool use into a black box.

## Example short post

```text
Most local AI agent setups force a bad choice:

- trust the agent with shell/file access
- disable the risky tools entirely
- or rebuild everything around a sandbox

Safety Gate is a middle layer for MCP tool execution.

It adds:
- policy checks
- review gates
- authenticated approvals
- auditability
- unified diffs for file writes

Built for local-first OpenClaw / MCP workflows.
```

## Example longer post

```text
We built Safety Gate for a very specific problem:

local AI agents are useful because they can touch real tools, but shell and file access get risky fast.

Safety Gate adds policy, approvals, and auditability to MCP tool execution.

Instead of choosing between blind trust and total lockdown, you can:
- allow low-risk actions
- deny obviously risky ones
- pause higher-risk ones for review
- authenticate who approved and executed them
- expire stale approvals
- inspect unified diffs for file writes

It’s not a full sandbox or orchestration platform.
It’s a control layer for local agent tool execution.
```

## Where to promote it

- GitHub README / repo social preview
- OpenClaw communities
- MCP / agent tooling communities
- local-first AI builders
- security-conscious developer forums

## What to emphasize

- narrow, clear scope
- real workflow utility
- reviewability and auditability
- local-first practicality

## What not to emphasize

- giant enterprise promises
- vague “AI safety” branding
- claims that it replaces sandboxing or host isolation

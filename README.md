# React Coding challenge

## Installation

1. `git clone https://github.com/Abdullah97128/react-coding-challange.git`
2. `cd toy-blocks-client-react`
3. `nvm use`
4. `npm i`
5. `npm start`
6. `npm test`

## Introduction

Here are the instructions for the React Coding Challenge. Please note that you have 5 days from the time of this email to complete and submit the challenge. Please ensure that you capture a screen recording with audio as you complete the challenge using programs such as Loom or other screen recording software. The recording should be at least full length of the challenge (1 hour and 15 mins). The recording must be on a streaming site - we cannot download large files. The video must include audio of you explaining what you are doing. We will review the recording to grade the challenge.

Here are the links you will need for the challenge:
[Figma Link](https://www.figma.com/proto/CCuZ0sjGQ2CQtKvuENHaF8/React-Hiring-Test?node-id=11%3A26922&scaling=min-zoom)
(You can use "Open in editor" to see the CSS values)

## Instructions

The current application is displaying a list of nodes. Don’t worry about what Nodes or Blocks are, just know that a Node has many Blocks. Each node represents a server. Each server implements the same API but returns different data. The important endpoints you will need to know for each server are:
/api/v1/status
/api/v1/blocks

Each node has many blocks and the blocks for each node are returned from the blocks endpoint.

Currently the application is getting the status for each node and updating the state. We would like you to retrieve the blocks from the endpoint, place them in the state and render them into a list that matches the design.

## Acceptance criteria:
1. Blocks are displayed when opening up the card
2. Loading, error, empty states are displayed when appropriate
3. Tests pass and coverage has been added to cover the changes
4. Implementation matches the design

___

- You have 75 minutes to complete the challenge from the time you begin.
- Tests are a mandatory part of the challenge, so please include them. Please add full test coverage to account for the features of the challenge, and make sure the full test suite passes.
- At the end of the challenge please verbally summarize and explain everything you have done, and show your UI work if applicable.
- Once you’ve completed the challenge, please email me a link to the video.
- If you are having difficulties with the challenge, please email me for assistance.

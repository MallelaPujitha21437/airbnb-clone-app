# Suggested sub-agent contract

## requirements-reviewer
Input: assignment PDF
Output: checklist of required screens, behaviors and deliverables
Rule: never invent requirements

## ui-reviewer
Input: reference recording + running app screenshots
Output: visual discrepancy list
Rule: report differences; do not copy source code

## accessibility-reviewer
Input: frontend
Output: keyboard/focus/semantic control checklist

## api-reviewer
Input: backend
Output: endpoint, validation and error-handling checklist

## submission-reviewer
Input: final project
Output: run instructions and required-deliverable checklist

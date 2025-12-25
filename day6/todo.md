# Setup Guide: Goose Winter Festival Triage GitHub Action

Follow these steps to set up the automated AI triage system for your repository.

## Phase 1: GitHub Repository Configuration
- [ ] **Create Labels**: Go to your repo -> Issues -> Labels and create:
    - `urgent` (red)
    - `low-priority` (blue)
    - `winter-festival` (purple)
- [ ] **Configure Secrets**: Go to Settings -> Secrets and variables -> Actions and add:
    - `GEMINI_API_KEY`: Your Google Gemini API Key.

## Phase 2: Workflow Implementation
- [ ] **Create Directory**: Create the folder `.github/workflows/` if it doesn't exist.
- [ ] **Create Workflow File**: Create `.github/workflows/goose-triage.yml`.
- [ ] **Add Content**: Copy the YAML snippet from `spec.md` into the new file.
- [ ] **Commit & Push**: Commit the changes to your main branch.

## Phase 3: Testing & Validation
- [ ] **Test Urgent Case**: Create a new issue titled "ICE HAZARD at Main Entrance" and check if:
    - Goose labels it `urgent` and `winter-festival`.
    - Goose leaves an urgent-specific comment.
- [ ] **Test Low Priority Case**: Create a new issue titled "Question about festival hours" and check if:
    - Goose labels it `low-priority` and `winter-festival`.
    - Goose leaves a general inquiry comment.

## Phase 4: Maintenance
- [ ] **Monitor Action Logs**: Check the "Actions" tab to ensure goose runs successfully.
- [ ] **Refine Prompts**: If triage results are inaccurate, adjust the prompt in the workflow file.

# PackML States Simulator

- [Online demo](https://packml-states.netlify.app/)

An interactive web application that simulates the PackML (Packaging Machine Language) state machine, as defined by the OMAC/ISA-TR88.00.02 standard. Designed as a training and visualization tool for operators, engineers, and anyone approaching industrial automation.

---

## What is PackML?

PackML is an industry standard (OMAC / ISA-TR88.00.02) that defines a common state machine model for packaging and industrial machines. It standardizes how a machine transitions between operating modes (running, stopped, faulted, etc.), making it easier to integrate, operate, and maintain machines from different vendors.

The state machine consists of **17 states** grouped into two categories:

| Category               | States                                                                                                        |
| ---------------------- | ------------------------------------------------------------------------------------------------------------- |
| **Acting (transient)** | Starting, Stopping, Aborting, Clearing, Resetting, Holding, Un-Holding, Suspending, Un-Suspending, Completing |
| **Wait (stable)**      | Idle, Execute, Complete, Held, Suspended, Stopped, Aborted                                                    |

---

## Features

- **Full PackML state machine** — all 17 states rendered in a grid that mirrors the official diagram layout
- **Operator panel** — buttons that trigger commands (Start, Stop, Reset, E-Stop, Hold, Suspend, SC)
- **Visual state highlight** — the active state is highlighted with a bold border
- **Blinking button hints** — buttons pulse to guide the operator toward the next valid action
- **Conveyor belt animation** — a simulated conveyor belt moves at different speeds depending on the machine state:
  - Fast → Execute, Holding, Suspending
  - Slow → Starting, Stopping, Un-Holding, Un-Suspending
  - Very slow (red) → Aborting
  - Stopped → all stable wait states
- **Mobile-first responsive layout** — works on phones, tablets, and desktops

---

## State Transition Logic

Commands are only accepted when the machine is in a compatible state. Below is a summary:

| Command                 | Valid from            | Transitions to    |
| ----------------------- | --------------------- | ----------------- |
| **Reset**               | Aborted               | Clearing          |
| **Reset**               | Stopped               | Resetting         |
| **Start**               | Idle                  | Starting          |
| **Stop**                | Execute               | Stopping          |
| **E-Stop**              | Any (except Aborting) | Aborting          |
| **Hold**                | Execute               | Holding           |
| **Hold**                | Held                  | Un-Holding        |
| **Suspend**             | Execute               | Suspending        |
| **Suspend**             | Suspended             | Un-Suspending     |
| **SC** (State Complete) | Any transient state   | Next stable state |

The **SC (State Complete)** button simulates the machine completing a transient phase (e.g., the starting sequence finishing), which in a real machine would be triggered automatically by the machine's internal logic.

---

## Tech Stack

| Technology                                     | Role                      |
| ---------------------------------------------- | ------------------------- |
| [React 19](https://react.dev/)                 | UI framework              |
| [Redux Toolkit](https://redux-toolkit.js.org/) | State management          |
| [React Redux](https://react-redux.js.org/)     | React/Redux binding       |
| [Tailwind CSS 4](https://tailwindcss.com/)     | Styling                   |
| [Vite](https://vitejs.dev/)                    | Build tool and dev server |

---

## Project Structure

```
src/
├── App.jsx                      # Root layout
├── components/
│   ├── State.jsx                # Single state cell
│   ├── StatesGrid.jsx           # 5-column grid of all states
│   ├── ConveyorBelt.jsx         # Animated conveyor belt
│   ├── OperatorPanel.jsx        # Command buttons panel
│   └── Button.jsx               # Reusable button with optional blink
├── data/
│   └── states.js                # State definitions (name, color, grid position)
└── features/
    └── state/
        └── stateSlice.js        # Redux slice — state machine logic
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Install and run

```bash
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for production

```bash
npm run build
```

---

## Usage

1. The machine starts in the **Aborted** state.
2. Press **Reset** → the machine enters **Clearing**.
3. Press **SC** (State Complete) → the machine reaches **Stopped**.
4. Press **Reset** again → **Resetting**.
5. Press **SC** → **Idle**.
6. Press **Start** → **Starting**.
7. Press **SC** → **Execute** — the conveyor belt runs at full speed.
8. From Execute you can **Stop**, **Hold**, **Suspend**, or trigger **E-Stop** at any time.

Blinking buttons indicate the next suggested action at each step.

---

## References

- [OMAC PackML Guidelines](https://www.omac.org/packml)
- [ISA-TR88.00.02 Technical Report](https://www.isa.org/)

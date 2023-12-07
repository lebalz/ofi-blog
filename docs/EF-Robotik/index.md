---
sidebar_custom_props:
  id: 1dc3df8d-87ae-40ec-a338-232b431d3f1d
---
# Robotik

```mermaid
stateDiagram-v2 
    direction LR
    classDef edgeLabel background:#ffffffdd
    [*] --> IDLE
    IDLE --> MOVE: Ereignis /Ausgabe
    MOVE --> STOP: EREIGNIS /Ausgabe
    MOVE --> MOVE
    STOP --> [*]
```

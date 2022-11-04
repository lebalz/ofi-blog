---
sidebar_custom_props:
  id: 3d84e698-d8ff-428e-b565-d2b962446e6c
---
# Scopes

## Ausgangslage
Wieso kann die Variable `word` auf Zeile 1 nicht verändert werden?
```py live_py slim
word = 'test'

def reset():
    word = 'hangman'
    print(word)

def play():
    print(word)
    reset()
    print(word)
play()
```

## Präsentation

<iframe src="/slides/python-scopes.html" style={{border:'0px',width:'100%',height:'500px'}} allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" />

## Notizen

<Answer type="text" webKey="01577bb7-a08d-47b0-8843-275c20c0fbab" />


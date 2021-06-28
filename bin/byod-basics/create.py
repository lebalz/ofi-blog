from pathlib import Path
import sys
from PIL import Image
sys.path.insert(0, str(Path.cwd()))
from easy_template import process_file, process_template, left_align_code

root = Path(__file__).parent
osx = root.joinpath('osx')
win = root.joinpath('win')

FULLSCREEN_MODAL = '''\
<div id="fullscreen-modal" class="fullscreen-modal">

  <!-- The Close Button -->
  <span class="close">&times;</span>

  <!-- Modal Content (The Image) -->
  <img class="fullscreen-modal-content" id="fullscreen-modal-img">
</div>

'''


def html_video(name: str, system: str, title: str = 'Video Tutorial') -> str:
    if title is None or title == '':
        title = 'Video Tutorial'
    return f'''

<button class="accordion">{title}</button>
<figure class="video_container panel">
  <video controls="true" width="100%" allowfullscreen="true">
    <source src="{system}/{name}" type="video/mp4">
  </video>
</figure>

'''


def html_image(name: str, system: str, title: str = 'Bild') -> str:
    if title is None or title == '':
        title = 'Bild'
    src = f'{system}/{name}'
    im = Image.open(root.joinpath(src))
    # image size
    width = im.size[0]
    height = im.size[1] / width * 300

    return f'''\
<button class="accordion">{title}</button>
<div class="panel">
    <img class="full-screen" src="{src}" width="300" height={int(height)} >
</div>

'''


def html_element(name: str, system: str, title: str = 'Bild') -> str:
    if name.endswith('.mp4'):
        return html_video(name, system, title)
    return html_image(name, system, title)


shared_srcs = {'fullscreen_modal': FULLSCREEN_MODAL}
for platform in ['osx', 'win']:
    dir = root.joinpath(platform)
    for movie in dir.glob('*.mp4'):
        if movie.name in shared_srcs:
            del shared_srcs[movie.name]
        else:
            shared_srcs[movie.name] = lambda title, name=movie.name, pltf=platform: html_video(name, pltf, title)

    for img in dir.glob('*.jpg'):
        if img.name in shared_srcs:
            del shared_srcs[img.name]
        else:
            shared_srcs[img.name] = lambda title, name=img.name, pltf=platform: html_image(name, pltf, title)

    for img in dir.glob('*.png'):
        if img.name in shared_srcs:
            del shared_srcs[img.name]
        else:
            shared_srcs[img.name] = lambda title, name=img.name, pltf=platform: html_image(name, pltf, title)

for platform in ['osx', 'win']:
    dir = root.joinpath(platform)
    vals = {**shared_srcs}
    for movie in dir.glob('*.mp4'):
        vals[movie.name] = lambda title, name=movie.name, pltf=platform: html_video(name, pltf, title)

    for img in dir.glob('*.jpg'):
        vals[img.name] = lambda title, name=img.name, pltf=platform: html_image(name, pltf, title)

    for img in dir.glob('*.png'):
        vals[img.name] = lambda title, name=img.name, pltf=platform: html_image(name, pltf, title)

    with open(root.joinpath(f'{platform}_basics.md'), 'w') as f:
        md = process_file(root.joinpath(f'{platform}_template.md'), values=vals)
        f.write(md)

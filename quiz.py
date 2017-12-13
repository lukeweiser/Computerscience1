import tkinter
import random


class Songs(models.Model):
    RAGGAE = 'song1'
    RAP = 'song2'
    TRAP = 'song3'
    TRASH = 'song4'

Random=("song1", "song2", "song3", "song4",)

root=tkinter.tk()
root.title("What do you want to listen too?")
root.geometry("200x100")

nameLabel=tkinter.label(root,text=""), font('Calibri', 32)
nameLabel.pack()

generateButton = tkinter.Button(text="Gimme a song!", command=generatesong)
GenerateButton.pack()

Root.mainloop()

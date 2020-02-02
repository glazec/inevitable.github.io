import os
i=1
for file in os.listdir('random/'):
    os.rename('random/'+file,'random/matrial-'+str(i)+'.png')
    i = i+1
i=1
for file in os.listdir('random/'):
    os.rename('random/'+file,'random/material-'+str(i)+'.png')
    i = i+1
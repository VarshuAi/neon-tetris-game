
            const canvas = document.getElementById('tetris-canvas');
            const ctx = canvas.getContext('2d');
            ctx.fillStyle = 'magenta';
            ctx.fillRect(40, 50, 40, 40);
            ctx.fillStyle = 'cyan';
            ctx.fillRect(100, 150, 40, 40);
            ctx.fillStyle = '#fff';
            ctx.font = '16px sans-serif';
            ctx.fillText('Demo Layout', 50, 250);
        
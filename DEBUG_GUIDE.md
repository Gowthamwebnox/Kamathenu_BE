# Debugging Guide for Kamathenu Backend

This guide explains how to debug your Node.js/TypeScript backend application.

## Prerequisites

Make sure you have the following VS Code extensions installed:
- **Node.js Extension Pack** (includes Node.js debugging support)

## Debugging Methods

### 1. VS Code Debugger (Recommended)

#### Setup:
1. Open your project in VS Code
2. Go to the **Run and Debug** panel (Ctrl+Shift+D)
3. Select one of the debug configurations from the dropdown

#### Available Configurations:

**Debug TypeScript (ts-node)**
- Direct debugging of TypeScript files
- Best for quick debugging sessions
- No auto-restart on file changes
- **Easy to stop**

**Debug with Nodemon**
- Debugging with nodemon (watches for file changes)
- Best for development workflow
- **Easy to stop**

**Debug with Auto-Restart**
- Debugging with auto-restart on file changes
- Automatically restarts when you save files
- **Harder to stop** - use this only when you need auto-restart

**Debug Compiled JavaScript**
- Debug the compiled JavaScript in the `dist` folder
- Use after running `npm run build`
- Good for production-like debugging
- **Easy to stop**

**Attach to Process**
- Attach to an already running Node.js process
- Use with `npm run debug` or `npm run debug-brk`
- **Easy to stop**

## How to Stop the Debugger

### Method 1: VS Code Debug Controls
- **Stop Button (🔴)**: Click the red square stop button in the debug toolbar
- **Keyboard Shortcut**: Press `Shift + F5`
- **Menu**: Debug → Stop Debugging

### Method 2: Terminal Commands
If the debugger is running in the integrated terminal:
- Press `Ctrl + C` in the terminal
- Or type `process.exit()` in the Debug Console

### Method 3: Force Kill Process
If the debugger is stuck:
1. Open Task Manager (Ctrl + Shift + Esc)
2. Find the Node.js process
3. End the task

### Method 4: Command Line (if started from terminal)
```bash
# If you started with npm run debug
# Press Ctrl + C in the terminal

# Or find and kill the process
# On Windows:
taskkill /f /im node.exe

# On Mac/Linux:
pkill -f node
```

## Troubleshooting: Can't Stop the Debugger

### Problem: Debugger keeps restarting
**Solution**: You're using "Debug with Auto-Restart" configuration
- Switch to "Debug TypeScript (ts-node)" or "Debug with Nodemon"
- Or manually stop the process using Task Manager

### Problem: Stop button doesn't work
**Solutions**:
1. Try `Shift + F5` keyboard shortcut
2. Close VS Code completely and reopen
3. Kill the Node.js process manually

### Problem: Multiple Node.js processes running
**Solution**:
```bash
# Windows
tasklist | findstr node
taskkill /f /im node.exe

# Mac/Linux
ps aux | grep node
pkill -f node
```

### Problem: Port 9229 is in use
**Solution**:
```bash
# Windows
netstat -ano | findstr :9229
taskkill /PID <PID> /F

# Mac/Linux
lsof -i :9229
kill -9 <PID>
```

## How to Use the Debugger

### Setting Breakpoints:
1. Click in the left margin of your code editor (next to line numbers)
2. A red dot will appear indicating a breakpoint
3. The debugger will pause execution when it reaches this line

### Debug Controls:
- **Continue (F5)**: Continue execution until next breakpoint
- **Step Over (F10)**: Execute current line and move to next line
- **Step Into (F11)**: Step into function calls
- **Step Out (Shift+F11)**: Step out of current function
- **Restart (Ctrl+Shift+F5)**: Restart debugging session
- **Stop (Shift+F5)**: Stop debugging

### Debug Console:
- Use the Debug Console to evaluate expressions
- Access variables in the current scope
- Execute JavaScript code

### Variables Panel:
- View all variables in the current scope
- Inspect object properties
- Monitor variable values as you step through code

## Example Debugging Session

1. **Set a breakpoint** in your authentication controller:
   ```typescript
   // In src/controllers/Auth/auth.controller.ts
   export const signUp = async (req: Request, res: Response) => {
     // Set breakpoint on the next line
     const { email, password, firstName, lastName } = req.body;
     // ... rest of the code
   }
   ```

2. **Start debugging**:
   - Select "Debug TypeScript (ts-node)" from VS Code debug panel
   - Click the green play button or press F5

3. **Trigger the endpoint**:
   - Make a POST request to your signup endpoint
   - The debugger will pause at your breakpoint

4. **Inspect variables**:
   - Check the Variables panel to see `req.body` contents
   - Use the Debug Console to evaluate expressions

5. **Stop debugging**:
   - Click the red stop button or press `Shift + F5`

## Tips for Effective Debugging

1. **Use meaningful breakpoints**: Set breakpoints at key decision points or where you suspect issues

2. **Check the call stack**: The Call Stack panel shows the execution path that led to the current point

3. **Use conditional breakpoints**: Right-click on a breakpoint to set conditions (e.g., only break when `email` is empty)

4. **Log variables**: Use `console.log()` for quick debugging, but prefer breakpoints for detailed inspection

5. **Debug async code**: Set breakpoints in `.then()`, `.catch()`, and `async/await` blocks

6. **Choose the right configuration**: Use "Debug TypeScript (ts-node)" for easy stopping, "Debug with Auto-Restart" only when you need auto-restart

## Troubleshooting

### Debugger not connecting:
- Make sure the port 9229 is not in use
- Check if your firewall is blocking the connection
- Try using a different port: `node --inspect=9230 ...`

### Source maps not working:
- Ensure `sourceMap: true` is set in `tsconfig.json`
- Rebuild your project: `npm run build`
- Check that the source files are in the correct location

### Breakpoints not hitting:
- Verify you're using the correct debug configuration
- Make sure the code path is actually being executed
- Check if there are any syntax errors preventing execution

## Environment Variables

The debugger will use the environment variables from your `.env` file. Make sure your `.env` file is properly configured for development.

## Performance Considerations

- Debugging adds overhead, so performance will be slower than production
- Use `console.log()` for performance-critical debugging
- Consider using the "Debug Compiled JavaScript" configuration for better performance 
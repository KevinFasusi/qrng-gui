package control

import (
	"fmt"
	"os/exec"
	"runtime"
	"strconv"
	"strings"
)

type Utils int

var usbDevice = "/dev/tty.usbmodem1101"

const (
	QRNG Utils = iota
	LS
)

func (u Utils) Strings() string {
	return [...]string{
		"qrng",
		"ls",
	}[u]
}

type OperatingSystems int

const (
	WINDOWS OperatingSystems = iota
	LINUX
	DARWIN
)

func (o OperatingSystems) Strings() string {
	return [...]string{
		"windows",
		"linux",
		"darwin",
	}[o]
}

type QrngCli struct {
	OS         string
	UesDevices []string
}

func NewQrngCli() *QrngCli {
	qrngCli := new(QrngCli)
	qrngCli.OS = runtime.GOOS

	return qrngCli
}
func (c *QrngCli) getOs() {
	c.OS = runtime.GOOS
}

func (c *QrngCli) GetSummary() string {
	cmd := exec.Command(QRNG.Strings(), "stats", "--device", usbDevice, "--snapshot")
	stdoutStderr, err := cmd.CombinedOutput()
	//out := strings.Split(string(stdoutStderr), " ")
	if err != nil && err.Error() != "exit status 1" {
		println(string(stdoutStderr))
		println(err.Error())
		panic("No controls available")
	}
	return string(stdoutStderr)
}

func (c *QrngCli) GetSpeed() string {
	cmd := exec.Command(QRNG.Strings(), "stats", "--device", usbDevice, "--snapshot")
	stdoutStderr, _ := cmd.CombinedOutput()
	out := strings.Split(string(stdoutStderr), " ")
	speed := ""
	for i := 0; i < len(out); i++ {
		if strings.Contains(out[i], "ms") {
			speed = out[i]
		}
	}
	return speed
}

func (c *QrngCli) GetRatio() string {
	cmd := exec.Command(QRNG.Strings(), "stats", "--device", usbDevice, "--snapshot")
	stdoutStderr, _ := cmd.CombinedOutput()
	out := strings.Split(string(stdoutStderr), " ")
	ratio := ""
	for i := 0; i < len(out); i++ {
		if strings.Contains(out[i], "/") && len(out[i]) == 25 {
			ratio = out[i]
		}
	}
	return ratio
}

func (c *QrngCli) GetUsbDevices() []string {

	switch c.OS {
	case "darwin":
		cmd := exec.Command(LS.Strings(), "-ha", "/dev/tty*")
		stdoutStderr, err := cmd.CombinedOutput()
		out := strings.Split(string(stdoutStderr), "\n")
		if err != nil && err.Error() != "exit status 1" {
			println(string(stdoutStderr))
			println(err.Error())
			panic("No controls available")
		}
		return out
	case "windows":
		panic("To Do")
	case "linux":
		panic("To Do")
	default:
		panic("To Do")
	}
}

// function to find device tty.usb...

func (c *QrngCli) GenerateKeys(number int, size uint64) []string {
	cmd := exec.Command(QRNG.Strings(), "generate", "privateKey", "--device", usbDevice,
		"--number", strconv.FormatInt(int64(number), 10), "--size", strconv.FormatUint(size, 10))
	stdoutStderr, err := cmd.CombinedOutput()
	out := strings.Split(string(stdoutStderr), "\n")
	if err != nil && err.Error() != "exit status 1" {
		println(string(stdoutStderr))
		println(err.Error())
		panic("No controls available")
	}
	return out[:number]
}

func (c *QrngCli) GenerateIntegers(number int) []string {
	cmd := exec.Command(QRNG.Strings(), "stream", "--device", usbDevice,
		"--number", strconv.FormatInt(int64(number), 10), "--integers")
	stdoutStderr, err := cmd.CombinedOutput()
	out := strings.Split(string(stdoutStderr), ",")
	if err != nil && err.Error() != "exit status 1" {
		println(string(stdoutStderr))
		println(err.Error())
		panic("No controls available")
	}
	return out[:number]
}

func (c *QrngCli) GenerateSha256(number int, size uint64) []string {
	cmd := exec.Command(QRNG.Strings(), "generate", "sha256", "--device", usbDevice,
		"--number", strconv.FormatInt(int64(number), 10), "--size", strconv.FormatUint(size, 10))
	stdoutStderr, err := cmd.CombinedOutput()
	fmt.Printf("NUMBER: %d SIZE: %d\n", number, size)
	out := strings.Split(string(stdoutStderr), "\n")
	if err != nil && err.Error() != "exit status 1" {
		println(string(stdoutStderr))
		println(err.Error())
		panic("No controls available")
	}
	fmt.Printf("OUTPUT %v", out)
	return out
}

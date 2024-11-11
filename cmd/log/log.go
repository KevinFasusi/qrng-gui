package log

import (
	"embed"
	"encoding/json"
	"fmt"
	"github.com/labstack/gommon/log"
	"os"
)

//go:embed store/activity-log.json
var logDir embed.FS

type Entry struct {
	ID        string `json:"id"`
	Activity  string `json:"activity"`
	Duration  string `json:"duration"`
	Timestamp string `json:"timestamp"`
}

type Log struct {
	Logs []*Entry `json:"logs"`
}

func NewEntry(id string, activity string, duration string, ts string) *Entry {
	return &Entry{
		ID:        id,
		Activity:  activity,
		Duration:  duration,
		Timestamp: ts,
	}
}

func NewLog(entries []*Entry) *Log {
	return &Log{
		Logs: entries,
	}
}

func (l *Log) Write() {
	b, err := json.Marshal(l)
	if err != nil {
		log.Errorf("Failed to marshal store: %v", err)
	}
	filename := fmt.Sprintf("store/activity-log.json")
	err = os.WriteFile(filename, b, os.ModePerm)
	if err != nil {
		log.Errorf("Failed to write to file %s: %s", filename, err.Error())
	}
}

func (l *Log) Read() {
	filename := fmt.Sprintf("store/activity-log.json")
	b, err := os.ReadFile(filename)
	if err != nil {
		log.Errorf("Failed to read from file %s: %s", filename, err.Error())
	}
	err = json.Unmarshal(b, l)
}
